---
title: Gesture settings
titleTemplate: Player settings
description: Gesture settings for the video player.
---

# Gestures

This section deals with settings for gestures.

## Sliders

### Enable Volume and Brightness Gestures <Badge text="On" type="info" />

Option to enable volume and brightness slider when swiping up or down on the player.

### Swap volume and brightness slider <Badge text="Off" type="info" />

Option to swap the sliders. Default (off) is swipe on the right side for volume and swipe on the left side for brightness.

## Seeking

### Enable Horizontal Seek Gesture <Badge text="On" type="info" />

This option toggles the horizontal seek gesture, allowing you to seek the video by swiping left or right on the player.

### Show seekbar when seeking <Badge text="Off" type="info" />

Self-explanatory.

### Default skip intro length <Badge text="85s" type="info" />

Default intro length. Tap to change between a value between 1 and 255 seconds. Setting this value to 0 disabled the +85s button for all anime by default.

### Double tap to skip length <Badge text="10s" type="info" />

Double tapping on left or right portion of the player will skip video forward or backward respectively by selected time.

### Enable precise seeking <Badge text="Off" type="info" />

When enabled, seeking will not focus on keyframes leading to slower but more precise seeking. This may have a negative impact on performance.

### Enable AniSkip <Badge text="Off" type="info" />

AniSkip is a functionality designed to automatically skip the intros and endings segments of an episode.

::: warning For your information
For AniSkip to work, the entry must be tracked with either AniList or MyAnimeList.
:::

### Enable auto skip <Badge text="Off" type="info" />

When enabled, any intros and endings will be automatically skipped.

### Enable Netflix style <Badge text="Off" type="info" />

When enabled and an intro or ending is reached, a toast will display showing the time left before it's skipped during which time the user can choose not to skip.

### Button timeout <Badge text="5s" type="info" />

The time taken before an intro or ending is skipped when **Netflix style** is enabled.

## Double tap

Change what double tapping on each region of the player does. If `Custom` is set, left will send the keycode `0x10001`, center will send the keycode `0x10002`, and right will send the keycode `0x10003`.

## Media controls

Change what using media controls does. If `Custom` is set, previous will send the keycode `0x10004`, play/pause will send the keycode `0x10005`, and next will send the keycode `0x10006`.
