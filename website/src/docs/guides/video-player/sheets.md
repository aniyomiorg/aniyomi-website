---
title: Player sheets
titleTemplate: Video player - Guides
description: Sheets for the video player.
---

<script setup>
import TitleIcon from "@theme/components/TitleIcon.vue";
</script>

# Player sheets

This section explains what the different sheets do.

## Subtitle tracks

![Subtitle tracks sheet](/docs/guides/video-player/subtitle.light.webp#light =648x243)

![Subtitle tracks sheet](/docs/guides/video-player/subtitle.dark.webp#dark =648x243)

### Add external subtitles

Add subtitles from a file on your device.

### <TitleIcon name="subtitle_settings"/> Subtitle settings

Open panel for [Subtitle settings](/docs/guides/video-player/panels#subtitle-settings).

### <TitleIcon name="delay"/> Subtitle delay

Open panel for [Subtitle delay](/docs/guides/video-player/panels#subtitle-delay).

### Subtitle list

Select which subtitle(s) to use. #1 denotes the primary subtitle and #2 for the secondary subtitle.

::: warning For your information
The secondary subtitle has some restrictions, such as styling being disabled. <MpvLink link="https://mpv.io/manual/stable/#options-secondary-sid"/>
:::

## Audio tracks

![Audio tracks sheet](/docs/guides/video-player/audio.light.webp#light =648x194)

![Audio tracks sheet](/docs/guides/video-player/audio.dark.webp#dark =648x194)

### Add external audio

Add audio from a file on your device.

### <TitleIcon name="delay"/> Audio delay

Open panel for [Audio delay](/docs/guides/video-player/panels#audio-delay).

### Audio list

Select which audio to use, or "Off" for no audio.

## More sheet

![More sheet](/docs/guides/video-player/more.light.webp#light =648x437)

![More sheet](/docs/guides/video-player/more.dark.webp#dark =648x437)

### <TitleIcon name="timer"/> Sleep timer

Opens up a dialog to set a sleep timer. Once the timer reaches zero, the video will pause.

### <TitleIcon name="filters"/> Video filters

Opens up the [Video filters](/docs/guides/video-player/panels#video-filters) panel.

### Hardware decoding mode

Specify the hardware video decoding API that should be used if possible. See [mpv's documentation](https://mpv.io/manual/master/#options-hwdec) for more info. Possible values is as follows:
- **Auto** - Automatically select best decoder.
- **HW+** - Slightly better performance than `HW`, at the cost of not allowing some filters.
- **HW** - Uses hardware to decode video, providing better performance and battery effiency.
- **SW** - Uses software to decode video, has less performance than `HW` but comes with better compatibility for older phones.

### Default statistics page

Show some statistics about mpv, for more information refer to [mpv's documentation](https://mpv.io/manual/master/#stats). The different pages shows:
- **Off** - No statistics is shown.
- **Page 1** - Show usual stats
- **Page 2** - Show frame timings
- **Page 3** - Input cache stats
- **Page 4** - Active key bindings
- **Page 5** - Selected tracks info

### Custom buttons

Here, a list of all the [Custom buttons](/docs/guides/player-settings/custom-buttons) will show up.

### Audio channels

See [Player settings](/docs/guides/player-settings/#audio-channels).

## Playback sheet

![Playback sheet](/docs/guides/video-player/playback.light.webp#light =648x292)

![Playback sheet](/docs/guides/video-player/playback.dark.webp#dark =648x292)

### Speed 1.00x

The current speed. Change speed more precisely with the slider.

### Speed list

Add or remove speeds. Press <TitleIcon name="reset"/>to reset the list.

### Enable audio pitch correction

Prevents the audio from becoming high-pitched at faster speeds and low-pitched at slower speeds. <MpvLink link="https://mpv.io/manual/stable/#options-audio-pitch-correction"/>

### Make default speed

Make the current speed the default speed. Press <TitleIcon name="reset"/>to reset it back to 1.00x.

## Share sheet

![Share sheet](/docs/guides/video-player/share.light.webp#light =648x162)

![Share sheet](/docs/guides/video-player/share.dark.webp#dark =648x162)

### <TitleIcon name="share_cover"/> Set as cover

Set the current frame as the cover of the entry.

### <TitleIcon name="share"/> Share

Share the current frame as an image.

### <TitleIcon name="share_save"/> Save

Save the current frame as an image. Images are saved in `Pictures/Aniyomi/<anime name>/` on your phone.
