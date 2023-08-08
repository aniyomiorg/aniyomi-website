---
title: Player settings
description: Player settings for Aniyomi.
lang: en-US
---

# Player settings
This section relates to the watching experience in the app and navigating the player.

## At what point to mark the episode as seen <Badge text="85%" type="default-indicator" vertical="middle" />
This setting let's you configure after watching how much percentage of episode should it be automatically marked as seen.

**70% - 100% (5% increments)**
- This option will mark the episode as seen after you watched the first 70% - 100% of the episode.

## Preserve watch position on seen episodes <Badge text="True" type="default-indicator" vertical="middle" />
This option will preserve the watch position on episodes even after it's marked as seen.

## Show content in display cutout <Badge text="True" type="default-indicator" vertical="middle" />
This option toggles the margin to the left side of player so that phones with notches won't obstruct the player UI.

<CarouselWrapper name="carousel-crop-borders">
<CarouselItem>
<figure class="centered">
	<h4>Show content in display cutout turned on</h4>
	<img height="auto" width= auto :src="$withBase('/assets/guides_player-display-cutout-on.png')">
</figure>
</CarouselItem>
<CarouselItem>
<figure class="centered">
	<h4>Show content in display cutout turned off</h4>
	<img height="auto" width= auto :src="$withBase('/assets/guides_player-display-cutout-off.png')">
</figure>
</CarouselItem>
</CarouselWrapper>

## Show player controls when opening the player <Badge text="On" type="default-indicator" vertical="middle" />
This option toggles the visibility of player controls while the player is opening.

## Edit MPV configuration file <Badge text="None" type="default-indicator" vertical="middle" />
Aniyomi employs the [mpv-android](https://github.com/mpv-android/mpv-android) player, offering the ability to extensively configure its settings via a dedicated configuration file. With this feature, you can conveniently edit the configuration file directly within the app.
For further details about the configuration file, refer to [mpv's documentation](https://mpv.io/manual/stable/#configuration-files).

## Enable volume and brightness gestures <Badge text="On" type="default-indicator" vertical="middle" />
This option toggles the volume and brightness gestures, allowing you to control the volume and brightness of the video by swiping up or down on the right or left side of the player.

## Remember last used brightness/volume <Badge text="Off" type="default-indicator" vertical="middle" />
This option toggles the ability to remember the last used brightness and volume levels.

## Default orientation <Badge text="Free" type="default-indicator" vertical="middle" />
This option lets you choose the default orientation of the player.
- **Free** - The player will rotate Depending on orientation of the device.
- **Portrait** - The player will always be in portrait mode.
- **Reverse Portrait** - The player will always be in reverse portrait mode.
- **Landscape** - The player will always be in landscape mode.
- **Reverse Landscape** - The player will always be in reverse landscape mode.
- **Sensor Portrait** - The player will rotate between portrait and reverse portrait mode depending on the orientation of the device.
- **Sensor Landscape** - The player will rotate between landscape and reverse landscape mode depending on the orientation of the device.

## Adjust the orientation based on the video's dimensions <Badge text="On" type="default-indicator" vertical="middle" />
This feature ensures that the player's orientation is synchronized with the video's orientation. If the video's aspect ratio is greater than 1, the player will adopt landscape mode. Conversely, if the video's aspect ratio is less than 1, the player will switch to portrait mode. This simplifies the alignment between the player and the video's dimensions.

## Default portrait/landscape orientation <Badge text="Sensor" type="default-indicator" vertical="middle" />
This option lets you choose the default orientation of the player.
- **Default Portrait**
  - **Portrait** - The player will always be in portrait mode.
  - **Reverse Portrait** - The player will always be in reverse portrait mode.
  - **Sensor Portrait** - The player will rotate between portrait and reverse portrait mode depending on the orientation of the device.
- **Default Landscape**
  - **Landscape** - The player will always be in landscape mode.
  - **Reverse Landscape** - The player will always be in reverse landscape mode.
  - **Sensor Landscape** - The player will rotate between landscape and reverse landscape mode depending on the orientation of the device.

## Enable horizontal seek gesture <Badge text="On" type="default-indicator" vertical="middle" />
This option toggles the horizontal seek gesture, allowing you to seek the video by swiping left or right on the player.

## Default skip intro length <Badge text="85s" type="default-indicator" vertical="middle" />
**1s to 255s (1s increments)**
- This setting allows you to skip the episode's intro by the chosen duration when you press the button in the player.


## Double tap to skip length <Badge text="10s" type="default-indicator" vertical="middle" />
Double tapping on left or right portion of the player will skip video forward or backward respectively by selected time.

**Disabled - 30s**
- Selecting "Disabled" will deactivate the double tap to skip functionality, replacing it with a double tap to pause/play.
- Choosing any other time value will result in skipping the episode forward or backward based on the selected duration.


## Enable precise seeking <Badge text="Off" type="default-indicator" vertical="middle" />
When enabled, seeking will not focus on keyframes leading to slower but more precise seeking. this may have a negative impact on performance.

## Enable AniSkip <Badge text="Off" type="default-indicator" vertical="middle" />
Aniskip is a functionality designed to automatically skip the intros and endings segments of an episode. To use this feature, the anime entry must be tracked through AniList or MyAnimeList.

## Enable Picture-In-Picture <Badge text="On" type="default-indicator" vertical="middle" />
This option toggles the Picture-In-Picture mode, allowing you to watch the video in a floating window while using other apps.

## Show episode toasts when switching episodes in PiP <Badge text="On" type="default-indicator" vertical="middle" />
This option toggles the episode toasts that appear whenever a new episode starts playing while in PiP.

## Automatically enter PiP when exiting the player <Badge text="Off" type="default-indicator" vertical="middle" />
This option toggles the automatic entry into PiP mode when exiting the player.

## Always use external player <Badge text="Off" type="default-indicator" vertical="middle" />
For those people who want to use external players like MX Player, VLC or MPV as a default player can toggle this option on.

## External player preference <Badge text="None" type="default-indicator" vertical="middle" />
Shows you a list of players currently installed on your phone which are supported by Aniyomi as an external player and lets you select your preferred one.

**None**
- If the 'None' option is selected then Aniyomi will present you with all the supported external players available on your phone when you tap on an episode to play it.

::: c-tip
Below 'None' are all of the external players available on your phone that will be displayed and selecting one of them will make it the default for Aniyomi.
:::
