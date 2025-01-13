---
title: Internal player settings
titleTemplate: Player settings
description: Internal player settings for the video player.
---

# Internal player

This section deals with settings for controls, display, picture-in-picture, and other settings that doesn't fit into any other categories.

## Options

### At what point to mark the episode as seen <Badge type="info" text="85%" />

This setting lets you configure after watching how much percentage of episode should it be automatically marked as seen.

#### 70% - 100% (5% increments)
- This option will mark the episode as seen after you watched the first 70% - 100% of the episode.

### Preserve watch position on seen episodes <Badge text="On" type="info" />
This option will preserve the watch position on episodes even after it's marked as seen.

### Orientation <Badge type="info" text="Sensor landscape" />

This option lets you choose the default orientation of the player.
- **Free** - The player will rotate depending on orientation of the device.
- **Video** - The player will rotate depending on the aspect ratio of the video.
- **Portrait** - The player will always be in portrait mode.
- **Reverse Portrait** - The player will always be in reverse portrait mode.
- **Landscape** - The player will always be in landscape mode.
- **Reverse Landscape** - The player will always be in reverse landscape mode.
- **Sensor Landscape** - The player will rotate between landscape and reverse landscape mode depending on the orientation of the device.

## Controls

### Allow gesture in panels <Badge text="Off" type="info" />

Option to allow gestures while a panel is shown.

### Show loading circle <Badge text="On" type="info" />

Option to show a loading circle while the video and tracks are being loaded.

### Show current chapter indicator <Badge text="On" type="info" />

Option to show the [Current chapter indicator](/docs/guides/video-player/#chapter).

### Remember and switch to the last used brightness <Badge text="Off" type="info" />

This option toggles the ability to remember the last used brightness level.

### Remember and switch to the last used volume <Badge text="Off" type="info" />

This option toggles the ability to remember the last used volume level.

## Display

### Show content in display cutout <Badge text="On" type="info" />
This option toggles the margin to the left side of player so that phones with notches won't obstruct the player UI.

::: tabs
=== Display cutout turned on
![Display cutout turned on](/docs/guides/player-settings/display-cutout-on.webp =512x788)
=== Display cutout turned off
![Display cutout turned off](/docs/guides/player-settings/display-cutout-off.webp =512x788)
:::

### Hide player controls when opening the player <Badge text="Off" type="info" />

This option toggles the visibility of player controls while the player is opening.

### Display volume as percentage <Badge text="On" type="info" />

Option to display the volume as a percentage or as system volume.

### Show system status bar with controls <Badge text="Off" type="info" />

Option to display the system bar alongside the player controls.

### Reduce player animation <Badge text="Off" type="info" />

Option to fade in and out the main player controls instead of sliding it in horizontally.

### Hide player controls time <Badge type="info" text="4000 ms" />

Time taken before the controls hides if nothing is pressed.

### Panel opacity <Badge type="info" text="60%" />

Opacity of player [Panels](/docs/guides/video-player/panels).

## Picture-in-Picture (PiP)

### Enable to use of PiP mode <Badge text="Off" type="info" />

This option toggles the Picture-In-Picture mode, allowing you to watch the video in a floating window while using other apps.

### Show episode toasts when switching episodes in PiP mode <Badge text="On" type="info" />

This option toggles the episode toasts that appear whenever a new episode starts playing while in PiP.

### Automatically switch to PiP mode on exiting the player <Badge text="Off" type="info" />

This option toggles the automatic entry into PiP mode when exiting the player.

### Replaces the "Skip 10 seconds option" with "Previous episode" <Badge text="Off" type="info" />

Self-explanatory.

## External player

### Always use external player <Badge text="Off" type="info" />
For those people who want to use external players like MX Player, VLC or MPV as a default player can toggle this option on.

### External player preference <Badge text="None" type="info" />
Shows you a list of players currently installed on your phone which are supported by Aniyomi as an external player and lets you select your preferred one.

#### None
- If the 'None' option is selected then Aniyomi will present you with all the supported external players available on your phone when you tap on an episode to play it.

::: tip
Below 'None' are all of the external players available on your phone that will be displayed and selecting one of them will make it the default for Aniyomi.
:::

<!-- markdownlint-disable MD004 -->
::: details Current supported external players
* [Just Player](https://play.google.com/store/apps/details?id=com.brouken.player)
* [mpv-android](https://play.google.com/store/apps/details?id=is.xyz.mpv)
* [MPV-Remote](https://github.com/husudosu/mpv-remote-app)
* [mpvKt](https://play.google.com/store/apps/details?id=live.mehiz.mpvkt) / [mpvKt Preview](https://github.com/abdallahmehiz/mpvKt)
* [MX Player](https://play.google.com/store/apps/details?id=com.mxtech.videoplayer.ad) / [MX Player Pro](https://play.google.com/store/apps/details?id=com.mxtech.videoplayer.pro)
* [Next Player](https://play.google.com/store/apps/details?id=dev.anilbeesetti.nextplayer)
* [VLC](https://play.google.com/store/apps/details?id=org.videolan.vlc)
* [Web Video Cast](https://play.google.com/store/apps/details?id=com.instantbits.cast.webvideo)
* [XPlayer](https://play.google.com/store/apps/details?id=video.player.videoplayer)
  :::
<!-- markdownlint-enable MD004 -->
