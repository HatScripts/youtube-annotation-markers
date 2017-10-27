// ==UserScript==
// @name        YouTube Annotation Markers
// @namespace   https://github.com/HatScripts/YouTubeAnnotationMarkers
// @version     1.2.1
// @description Marks where annotations are on the progress bar of the HTML5 YouTube player.
// @author      HatScripts
// @include     http*://*.youtube.com/*
// ==/UserScript==

(function () {
    function parseTime(timeStr) {
        var parts = timeStr.split(":");
        var duration = 0;
        for (var multiplier = 1; parts.length > 0; multiplier *= 60) {
            duration += multiplier * parseFloat(parts.pop());
        }
        return duration;
    }

    function getVideoAnnotationXml(videoId, success) {
        var request = new XMLHttpRequest();
        request.open("GET", "annotations_invideo?video_id=" + videoId, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var xmlString = request.responseText;
                var domParser = new DOMParser();
                success(domParser.parseFromString(xmlString, "text/xml"));
            }
        };
        request.send();
    }

    function annotationToMarker(annotation) {
        var rectRegions = Array.from(annotation.querySelectorAll("movingRegion *:not([t=never])"));
        if (rectRegions.length === 0) {
            return false;
        }
        var start = rectRegions[0].getAttribute("t");
        var end = rectRegions[rectRegions.length - 1].getAttribute("t");
        var startTime = parseTime(start);
        var duration = parseTime(end) - startTime;
        var appearance = annotation.querySelector("appearance");
        var c = parseInt(appearance.getAttribute("bgColor"), 10);
        var rgb = [(c & 0xff0000) >> 16, (c & 0x00ff00) >> 8, (c & 0x0000ff)];
        var marker = document.createElement("div");
        marker.classList.add("ytp-play-progress");
        marker.style.position = "absolute";
        marker.style.left = ((startTime / videoDuration) * 100) + "%";
        marker.style.bottom = "100%";
        marker.style.transform = "scaleX(" + (duration / videoDuration) + ")";
        marker.style.background = "rgb(" + rgb + ")";
        marker.style.opacity = 0.5;
        return marker;
    }

    function parseVideoAnnotationXml(xml) {
        Array.from(xml.querySelectorAll("annotation")).map(function (annotation) {
            return annotationToMarker(annotation);
        }).filter(function (annotation) {
            return annotation;
        }).sort(function (a1, a2) {
            return parseInt(a1.style.left) - parseInt(a2.style.left);
        }).forEach(function (annotation) {
            progressList.appendChild(annotation);
        });
    }

    function getVideoId() {
        var url = new URL(location.href);
        return url.searchParams.get("v") || url.pathname.split("/").pop()
            || document.querySelector("#page-manage ytd-watch").getAttribute("video-id");
    }

    var videoId = getVideoId();
    var player = document.querySelector("#player");
    var progressBar = player.querySelector(".ytp-progress-bar");
    var progressList = progressBar.querySelector(".ytp-progress-list");
    var videoDuration = parseTime(player.querySelector(".ytp-time-duration").innerText);
    getVideoAnnotationXml(videoId, parseVideoAnnotationXml);
})();