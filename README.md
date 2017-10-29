# YouTube Annotation Markers
Userscript that marks where annotations are on the progress bar of the HTML5 YouTube player.

![Preview image][preview]

<sub><sup>
Should be compatible with other YouTube userscripts such as [YouTube Center][ytc] and [YouTube+][yt+].
</sup></sub>

### Download
This is a userscript. To use it you'll first need one of the following browser extensions/add-ons:

|          | Tampermonkey | Greasemonkey | Violentmonkey |
|----------|--------------|--------------|---------------|
![Chrome]  | [Link][ch-t] | -            | [Link][ch-v]  |
![Firefox] | [Link][ff-t] | [Link][ff-g] | -             |
![Edge]    | [Link][ed-t] | -            | -             |
![Safari]  | [Link][sa-t] | -            | -             |
![Opera]   | [Link][op-t] | -            | [Link][op-v]  |

### Contribute
Please report any issues or request features on the [issues tracker][issues].

### TODO
- [ ] Optionally hide markers when annotations are disabled
- [ ] Annotation blacklist/whitelist:
    - Blacklist
      - By keywords, e.g. "subscribe", "like" or "rate"
      - By whether they are link annotations
        - Subscribe links, e.g. https://youtube.com/subscription_center?add_user=YouTube
        - Internal links (youtube.com)
        - External links (All other domains)
    - Whitelist
      - By channel
- [ ] Annotation transcripts

[preview]: https://cdn.rawgit.com/HatScripts/YouTubeAnnotationMarkers/master/preview.png
[ytc]:     https://github.com/YePpHa/YouTubeCenter
[yt+]:     https://github.com/ParticleCore/Particle
[issues]:  https://github.com/HatScripts/YouTubeAnnotationMarkers/issues
[chrome]:  https://hatscripts.com/a.svg?i=chrome&w=24         "Chrome"
[firefox]: https://hatscripts.com/a.svg?i=firefox&w=24        "Firefox"
[edge]:    https://hatscripts.com/a.svg?i=microsoft-edge&w=24 "Edge"
[safari]:  https://hatscripts.com/a.svg?i=safari&w=24         "Safari"
[opera]:   https://hatscripts.com/a.svg?i=opera&w=24          "Opera"
[ch-t]:    https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[ch-v]:    https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag
[ff-t]:    https://addons.mozilla.org/firefox/addon/tampermonkey/
[ff-g]:    https://addons.mozilla.org/firefox/addon/greasemonkey/
[ed-t]:    https://www.microsoft.com/store/apps/9NBLGGH5162S
[sa-t]:    https://safari.tampermonkey.net/tampermonkey.safariextz
[op-t]:    https://addons.opera.com/extensions/details/tampermonkey-beta/
[op-v]:    https://addons.opera.com/extensions/details/violent-monkey/
