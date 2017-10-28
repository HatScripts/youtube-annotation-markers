# YouTube Annotation Markers [![GitHub release](https://img.shields.io/github/release/HatScripts/YouTubeAnnotationMarkers.svg?style=flat-square)](https://github.com/HatScripts/YouTubeAnnotationMarkers/releases/latest) [![GitHub issues](https://img.shields.io/github/issues/HatScripts/YouTubeAnnotationMarkers.svg?style=flat-square)](https://github.com/HatScripts/YouTubeAnnotationMarkers/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/HatScripts/YouTubeAnnotationMarkers/master/LICENSE.md)
Userscript that marks where annotations are on the progress bar of the HTML5 YouTube player.

![Preview image](https://cdn.rawgit.com/HatScripts/YouTubeAnnotationMarkers/master/preview.png)

Should be compatible with [YouTube+](https://github.com/ParticleCore/Particle) and [YouTube Center](https://github.com/YePpHa/YouTubeCenter).

### Download
This is a userscript. To use it you'll first need one of the following browser extensions/add-ons:

|   | Tampermonkey | Greasemonkey | Violentmonkey |
|---|--------------|--------------|---------------|
![Chrome](https://cdn.rawgit.com/alrra/browser-logos/master/src/chrome/chrome_24x24.png "Chrome") | [Link](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) ([Beta](https://chrome.google.com/webstore/detail/tampermonkey-beta/gcalenpjmijncebpfijmoaglllgpjagf)) | - | [Link](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
![Firefox](https://cdn.rawgit.com/alrra/browser-logos/master/src/firefox/firefox_24x24.png "Firefox") | [Link](https://addons.mozilla.org/firefox/addon/tampermonkey/) | [Link](https://addons.mozilla.org/firefox/addon/greasemonkey/) | - |
![Edge](https://cdn.rawgit.com/alrra/browser-logos/master/src/edge/edge_24x24.png "Edge") | [Link](https://www.microsoft.com/store/apps/9NBLGGH5162S) | - | - |
![Safari](https://cdn.rawgit.com/alrra/browser-logos/master/src/safari/safari_24x24.png "Safari") | [Link](https://safari.tampermonkey.net/tampermonkey.safariextz) | - | - |
![Opera](https://cdn.rawgit.com/alrra/browser-logos/master/src/opera/opera_24x24.png "Opera") | [Link](https://addons.opera.com/extensions/details/tampermonkey-beta/) | - | [Link](https://addons.opera.com/extensions/details/violent-monkey/)

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
* [ ] Annotation transcripts
