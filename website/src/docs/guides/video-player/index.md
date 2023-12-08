---
title: Video player
titleTemplate: Guides
description: Information about the video player.
---

<script setup>
import ColorTag from "@theme/components/ColorTag.vue";
import TitleIcon from "@theme/components/TitleIcon.vue";
</script>

# Video player

This section aims to explain what each button in the player does as well as other features. Each button is explain left-to-right then top-to-bottom.

![ <ColorTag title="Top" color="#B1E0BB"/> <ColorTag title="Middle" color="#BBB1B6"/> <ColorTag title="Bottom" color="#F1AD8B"/> ](/docs/guides/video-player/player.webp =648x306)

## Top section

### <TitleIcon name="back_arrow"/> Back arrow

Exit the player.

### Title and episode text

Top text is the name of the Anime and the bottom text is the name of the episode.

### <TitleIcon name="episode_list"/> Episode list

Will open a list of each episode.

### <TitleIcon name="autoplay"/> Autoplay

When enabled, the next episode will automatically start playing when the video is finished.

### <TitleIcon name="chapters"/> Video chapters

Shows a list of all available video chapters and up selection will seek to selected chapter.

::: warning For your information
The icon will only appear if the video contains chapters.
:::

### <TitleIcon name="video_settings"/> Video settings

Will open a dialog to select `Video quality`, `Subtitle`, or `Audio`. The gear icon <TitleIcon name="settings"/>will open up a new dialog for styling subtitles, which is explained more in [Subtitle styling](/docs/guides/video-player/subtitle-styling).

### <TitleIcon name="overflow"/> More player settings

Some extra settings not found in [Player settings](/docs/guides/player-settings)

#### Enable Bolume and Brightness Gestures

Turn on to enable swiping up/down to adjust the player brightness and volume.

#### Enable Horizontal Seek Gesture

Turn on to enable swiping left/right to seek the video.

#### Hardware decoding mode

Specify the hardware video decoding API that should be used if possible. See [mpv's documentation](https://mpv.io/manual/master/#options-hwdec) for more info. Possible values is as follows:
- **HW+** - Slightly better performance than `HW`, at the cost of not allowing some filters.
- **HW** - Uses hardware to decode video, providing better performance and battery effiency.
- **SW** - Uses software to decode video, has less performance than `HW` but comes with better compatibility for older phones.

#### Toggle statistics page

Show some statistics about mpv, for more information refer to [mpv's documentation](https://mpv.io/manual/master/#stats). The different pages shows:
- **Off** - No statistics is shown.
- **Page 1** - Show usual stats
- **Page 2** - Show frame timings
- **Page 3** - Input cache stats

## Middle section

### <TitleIcon name="previous"/> Skip previous

Go to the previous episode in the episode list.

### <TitleIcon name="play"/>/ <TitleIcon name="pause"/> Play / Pause

Toggle between playing and pausing the video.

### <TitleIcon name="next"/> Skip next

Go to the next episode in the episode list.

## Bottom section

### <TitleIcon name="lock"/> Lock player

Press to lock the player. When in the locked state, tapping on the video will not bring up the player UI, instead only the lock icon will be shown again which will unlock the player when pressed.

### <TitleIcon name="rotate"/> Rotate player

Press to rotate the player between landscape and portrait mode.

### 1,00x Playback speed

Press to increment the playback speed in 0,25x increments. Long press to bring up a slider for more fine adjustments and a wider range of playback speeds.

### +85 s Intro skip

Press to go forward +85 s, intended for skipping intros. Long press to change the skip duration.

::: warning For your information
Changing the skip length will only affect the current anime.
:::

### <TitleIcon name="fullscreen"/> Cycle view modes <Badge text="Fit to screen" type="info" />

Cycle between different view modes. Possible values include:
- **Fit to screen** - Will attempt to best display the video, preserving both aspect ration and every part of the video. May result in black bars around the video.
- **Cropped to screen** - Will crop the video so the video takes up all of the screen. Will remove any black bars and preserve aspect ratio, but may result in some parts of the video being cut out.
- **Stretched to screen** - Will strect the video so the video takes up all of the screen. Will remove any black bars and preserve every part of the video, but may result in a different aspect ratio.

### <TitleIcon name="pip"/> Picture-in-Picture

Press to enable picture-in-picture mode.

::: warning For your information
This button will only appear if `Enable the use of PiP mode` is turned on in <nav to="player">
:::
