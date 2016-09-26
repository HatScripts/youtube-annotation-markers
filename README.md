# YouTube Annotation Markers [![GitHub release](https://img.shields.io/github/release/HatScripts/YouTubeAnnotationMarkers.svg?style=flat-square)](https://github.com/HatScripts/YouTubeAnnotationMarkers/releases/latest) [![GitHub issues](https://img.shields.io/github/issues/HatScripts/YouTubeAnnotationMarkers.svg?style=flat-square)](https://github.com/HatScripts/YouTubeAnnotationMarkers/issues) [![License](https://img.shields.io/github/license/HatScripts/YouTubeAnnotationMarkers.svg?maxAge=2592000)](https://github.com/HatScripts/YouTubeAnnotationMarkers/blob/master/LICENSE.md)
Userscript that marks where annotations are on the progress bar of the HTML5 YouTube player.

![Preview image](http://i.imgur.com/SzzWEFy.png)

Should be compatible with [YouTube+](https://github.com/ParticleCore/Particle) and [YouTube Center](https://github.com/YePpHa/YouTubeCenter).

### Download
This is a userscript. To use it you'll first need a userscript manager:

Browser | Recommended extension/add-on
--------|-----------------------------
![Icon](https://github.com/alrra/browser-logos/raw/master/chrome/chrome_16x16.png) Chrome  | [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
![Icon](https://github.com/alrra/browser-logos/raw/master/firefox/firefox_16x16.png) Firefox | [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/), [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
![Icon](https://github.com/alrra/browser-logos/raw/master/opera/opera_16x16.png) Opera   | [Tampermonkey](https://addons.opera.com/extensions/details/tampermonkey-beta/), [Violentmonkey](https://addons.opera.com/extensions/details/violent-monkey/)
![Icon](https://github.com/alrra/browser-logos/raw/master/safari/safari_16x16.png) Safari | [Tampermonkey](https://safari.tampermonkey.net/tampermonkey.safariextz)

If you already have one of the above, install this script from one of the following links:
* [GitHub](https://github.com/HatScripts/YouTubeAnnotationMarkers/raw/master/youtube-annotation-markers.user.js)
* [GreasyFork](https://greasyfork.org/scripts/16667-youtube-annotation-markers/code/YouTube%20Annotation%20Markers.user.js)
* [OpenUserJS](https://openuserjs.org/install/HatScripts/YouTube_Annotation_Markers.user.js)

### Contribute
Please report any issues or request features on the [issues tracker](https://github.com/HatScripts/YouTubeAnnotationMarkers/issues).

### TODO
* [ ] Optionally hide markers when annotations are disabled
* [ ] Annotation filtering, e.g:
    * Blacklist subscribe link annotations, e.g. https://youtube.com/subscription_center?add_user=YouTube
    * Blacklist internal link annotations, e.g. youtube.com
    * Blacklist external link annotations
    * Blacklist all link annotations
    * Whitelist only certain channels' annotations
