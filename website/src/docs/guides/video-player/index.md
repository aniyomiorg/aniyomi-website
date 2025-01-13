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

Top text is the name of the Anime and the bottom text is the name of the episode. Tap to open up the episode list as a pop-up in the player.

### <TitleIcon name="autoplay"/> Autoplay

When enabled, the next episode will automatically start playing when the video is finished.

### <TitleIcon name="subtitle_tracks"/> Subtitles

Press to open the [Subtitle](/docs/guides/video-player/sheets#subtitle-tracks) sheet. Long press to open the [Subtitle settings](/docs/guides/video-player/panels#subtitle-settings) panel.

### <TitleIcon name="audio_tracks"/> Audio

Press to open the [Audio](/docs/guides/video-player/sheets#audio-tracks) sheet. Long press to open the [Audio Delay](/docs/guides/video-player/panels#audio-delay) panel.

### <TitleIcon name="video_tracks"/> Video list

Opens up a sheet to select the video quality. This button is not present for the local source.

### <TitleIcon name="overflow"/> More player settings

Press to open the [More](/docs/guides/video-player/sheets#more-sheet) sheet.

### Auto-play is off

Here, additional messages such as the [Autoplay](/docs/guides/video-player/#autoplay) status, current [View mode](/docs/guides/video-player/#cycle-view-mode), and [`aniyomi.show_text(text)`](/docs/guides/player-settings/custom-buttons#aniyomi-show-text-text) shows up.

## Middle section

### <TitleIcon name="previous"/> Skip previous

Go to the previous episode in the episode list.

### <TitleIcon name="play"/>/ <TitleIcon name="pause"/> Play / Pause

Toggle between playing and pausing the video.

### <TitleIcon name="next"/> Skip next

Go to the next episode in the episode list.

## Bottom section

### <TitleIcon name="lock"/> Lock player

Press to lock the player. When in the locked state, it is not possible to interact with the player, instead only the lock icon will be shown again which will unlock the player when pressed.

### <TitleIcon name="rotate"/> Rotate player

Press to rotate the player between landscape and portrait mode.

### 1,00x playback speed

Press to increment the playback speed in 0,25x increments. Long press to bring up the [Playback](/docs/guides/video-player/sheets#playback-sheet) sheet.

### <TitleIcon name="chapters"/> Chapter

Shows the timestamp for the start of the current chapter, as well as its name. Press to open up a sheet of available chapters, press on a chapter to seek to it.

::: warning For your information
This will only appear if the video contains chapters.
:::

### +85 s

Shows the primary [Custom button](/docs/guides/player-settings/custom-buttons) if set.

### <TitleIcon name="pip"/> Picture-in-Picture

Press to enable picture-in-picture mode.

::: warning For your information
This button will only appear if your device supports PiP and `Enable the use of PiP mode` is turned on in <nav to="internal-player">
:::

### <TitleIcon name="aspect_ratio"/> Cycle view mode

Cycle between different view modes. Possible values include:
- **Fit to screen** - Will attempt to best display the video, preserving both aspect ratio and every part of the video. May result in black bars around the video.
- **Cropped to screen** - Will crop the video so the video takes up all of the screen. Will remove any black bars and preserve aspect ratio, but may result in some parts of the video being cut out.
- **Stretched to screen** - Will stretch the video so the video takes up all of the screen. Will remove any black bars and preserve every part of the video, but may result in a different aspect ratio.

## Other

### Long press

Long press the player (anywhere but on a button) to bring up the [Share](/docs/guides/video-player/sheets#share-sheet) sheet.

### Horizontal swiping

If `Enable Horizontal Seek Gesture` is enabled in <nav to="gestures">, swiping left/right will seek through the video.

### Vertical swiping

If `Enable Volume and Brightness Gestures` is enabled in <nav to="gestures">, swiping up/down on the right part of the player will adjust the volume and swiping up/down on the left part will adjust the brightness.
