// ==UserScript==
// @name        YouTube Annotation Markers
// @namespace   https://github.com/HatScripts/YouTubeAnnotationMarkers
// @version     1.0
// @description Marks where annotations are on the progress bar of the HTML5 YouTube player
// @author      HatScripts
// @include     http*://www.youtube.com/watch*
// @require     http://code.jquery.com/jquery-2.1.4.min.js
// @downloadURL https://github.com/HatScripts/YouTubeAnnotationMarkers/raw/master/youtube-annotation-markers.user.js
// @updateURL   https://github.com/HatScripts/YouTubeAnnotationMarkers/raw/master/youtube-annotation-markers.user.js
// @noframes
// ==/UserScript==

var parseTime = function (timeStr) {
    var parts = timeStr.split(":");
    var duration = 0;
    for (var multiplier = 1; parts.length > 0; multiplier *= 60) {
        duration += multiplier * parseFloat(parts.pop());
    }
    return duration;
};

$(function () {
    $.getVideoAnnotationXml = function (videoId) {
        return $.ajax({
            data:     {"video_id": videoId},
            url:      "annotations_invideo",
            dataType: "xml"
        });
    };

    $.annotationToMarker = function (annotationData) {
        var annotation = $(annotationData);
        var rectRegions = annotation.find("rectRegion");
        if (rectRegions.length === 0) {
            return false;
        }
        var first = rectRegions.first();
        var start = first.attr("t");
        var end = rectRegions.last().attr("t");
        if (start === "never" || end === "never") {
            return false;
        }
        var startTime = parseTime(start);
        var duration = parseTime(end) - startTime;
        var appearance = annotation.find("appearance");
        var c = parseInt(appearance.attr("bgColor"), 10);
        var rgb = [(c & 0xff0000) >> 16, (c & 0x00ff00) >> 8, (c & 0x0000ff)];
        var text = annotation.find("text");
        console.log(start + " -> " + end + ": " + c);
        return $("<div></div>")
            .addClass("ytp-play-progress")
            .css({
                "position":   "absolute",
                "left":       ((startTime / videoDuration) * 100) + "%",
                "bottom":     "100%",
                "transform":  "scaleX(" + (duration / videoDuration) + ")",
                "background": "rgb(" + rgb + ")",
                "opacity":    0.5
            });
    };

    $.parseVideoAnnotationXml = function (xml) {
        var annotations = $(xml).find("annotation");
        annotations.each(function (i, annotation) {
            var marker = $.annotationToMarker(annotation);
            if (marker) {
                progressList.append(marker);
            }
        });
    };

    var content = $("#content");
    var videoId = content.find("meta[itemprop=videoId]:first").attr("content");
    var playerApi = $("#player-api");
    var progressBar = playerApi.find(".ytp-progress-bar:first");
    var progressList = progressBar.find(".ytp-progress-list:first");
    var videoDuration = parseInt(progressBar.attr("aria-valuemax"), 10);
    $.getVideoAnnotationXml(videoId).success($.parseVideoAnnotationXml);
});