---
title: Player panels
titleTemplate: Video player - Guides
description: Panels for the video player.
---

<script setup>
import TitleIcon from "@theme/components/TitleIcon.vue";
import MpvLink from "@theme/components/MpvLink.vue";
</script>

# Player panels

This section explains what the different panels do.

## Subtitle settings

### Subtitle typography settings

Settings to change the styling of subtitles.

![Subtitle typography settings panel](/docs/guides/video-player/subtitle-settings-typography.light.webp#light =648x661)

![Subtitle typography settings panel](/docs/guides/video-player/subtitle-settings-typography.dark.webp#dark =648x661)

#### <TitleIcon name="font_bold"/> Toggle bold

Toggle bold. <MpvLink link="https://mpv.io/manual/master/#options-sub-bold"/>

#### <TitleIcon name="font_italic"/> Toggle italic

Toggle italic. <MpvLink link="https://mpv.io/manual/master/#options-sub-italic"/>

#### Subtitle justification

How multi line subtitles are justified. <MpvLink link="https://mpv.io/manual/master/#options-sub-justify"/>

* <TitleIcon name="justify_left"/> - Left justification
* <TitleIcon name="justify_center"/> - Center justification
* <TitleIcon name="justify_right"/> - Right justification
* None selected - Auto justification

#### <TitleIcon name="typography_clear"/> Reset

Reset all subtitle typography settings.

#### <TitleIcon name="font_family"/> Font family

Select font family. Options includes "Sans Serif" (default) and all fonts placed in the `mpv-config/fonts` subdirectory for [Storage location](/docs/faq/storage#storage-location). <MpvLink link="https://mpv.io/manual/master/#options-sub-font"/>

#### <TitleIcon name="font_size"/> Font size

Select font size. <MpvLink link="https://mpv.io/manual/master/#options-sub-font-size"/>

#### <TitleIcon name="border_style"/> Border style

Border style of subtitles. <MpvLink link="https://mpv.io/manual/master/#options-sub-border-style"/>

#### <TitleIcon name="border_size"/> Border size

Border size of subtitles. <MpvLink link="https://mpv.io/manual/master/#options-sub-outline-size"/>

#### <TitleIcon name="shadow_offset"/> Shadow offset

Displacement of subtitle shadow. <MpvLink link="https://mpv.io/manual/master/#options-sub-shadow-offset"/>

### Subtitle colors settings

Settings to change the color of subtitles.

![Subtitle colors settings panel](/docs/guides/video-player/subtitle-settings-colors.light.webp#light =648x543)

![Subtitle colors settings panel](/docs/guides/video-player/subtitle-settings-colors.dark.webp#dark =648x543)

To change a color, first select one of three possibles properties to change color for, then use the sliders to change the color. The properties are as follows:

* <TitleIcon name="font_color"/>- Color for text. <MpvLink link="https://mpv.io/manual/master/#options-sub-color"/>
* <TitleIcon name="border_color"/>- Color for background/outline. <MpvLink link="https://mpv.io/manual/master/#options-sub-outline-color"/>
* <TitleIcon name="shadow_color"/>- Color for text shadow. <MpvLink link="https://mpv.io/manual/master/#options-sub-back-color"/>

#### <TitleIcon name="color_reset"/> Reset

Reset text colors.

### Subtitle miscellaneous settings

![Subtitle miscellaneous settings panel](/docs/guides/video-player/subtitle-settings-misc.light.webp#light =648x469)

![Subtitle miscellaneous settings panel](/docs/guides/video-player/subtitle-settings-misc.dark.webp#dark =648x469)

#### Override ASS/SSA subtitles

Switch to toggle whether to style ass/ssa subtitles. <MpvLink link="https://mpv.io/manual/master/#options-sub-ass-override"/>

#### <TitleIcon name="font_size"/> Subtitle scale

Add scaling of subtitles. <MpvLink link="https://mpv.io/manual/master/#options-sub-scale"/>

#### <TitleIcon name="subtitle_pos"/> Subtitle position

Vertical position of subtitles. <MpvLink link="https://mpv.io/manual/master/#options-sub-pos"/>

## Subtitle delay

![Subtitle delay panel](/docs/guides/video-player/subtitle-delay.light.webp#light =648x543)

![Subtitle delay panel](/docs/guides/video-player/subtitle-delay.dark.webp#dark =648x543)

Set subtitle(s) delay. Tap the dropdown to set the delay either for the primary, secondary, or both subtitles. Note that the subtitle speed can only be set for the primary subtitle. Instead of trying to fine tune the delay manually, you can also use the `Voice heard` and `Text seen` buttons. If the text appears before it should, press the `Text seen` button when the subtitle appears and then the `Voice heard` when the voice for said subtitle is heard.

### Set as default

Set the current delay and speed as the default. Press <TitleIcon name="delay_reset"/>to reset both the delay and speed.

## Audio delay

![Audio delay panel](/docs/guides/video-player/audio-delay.light.webp#light =648x419)

![Audio delay panel](/docs/guides/video-player/audio-delay.dark.webp#dark =648x419)

Set audio delay. Instead of trying to fine tune the delay manually, you can also use the `Sound heard` and `Sound spotted`. If the sound appears before it should, press the `Sound heard` button when some sound is heard and then the `Sound spotted` when said sound should be played.

<!-- markdownlint-disable MD024 -->
### Set as default
<!-- markdownlint-enable MD024 -->

Set the current delay as the default. Press <TitleIcon name="delay_reset"/>to reset both the delay.

## Video filters

![Filters panel](/docs/guides/video-player/filters.light.webp#light =648x585)

![Filters panel](/docs/guides/video-player/filters.dark.webp#dark =648x585)

### Brightness

Video brightness. <MpvLink link="https://mpv.io/manual/master/#options-brightness"/>

### Saturation

Video saturation. <MpvLink link="https://mpv.io/manual/master/#options-saturation"/>

### Contrast

Video contrast. <MpvLink link="https://mpv.io/manual/master/#options-contrast"/>

### Gamma

Video gamma. <MpvLink link="https://mpv.io/manual/master/#options-gamma"/>

### Hue

Video hue. <MpvLink link="https://mpv.io/manual/master/#options-hue"/>
