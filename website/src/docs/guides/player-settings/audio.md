---
title: Audio settings
titleTemplate: Player settings
description: Audio settings for the video player.
---

<script setup>
import MpvLink from "@theme/components/MpvLink.vue";
</script>

# Audio

This section deals with audio related settings.

## Options

### Preferred languages

Enter a comma-separated list of preferred subtitle languages. Enter each language as either a two- or three-letter code. Example: `ja,jpn`.

### Enable audio pitch correction <Badge text="On" type="info" />

Prevents the audio from becoming high-pitched at faster speeds and low-pitched at slower speeds. <MpvLink link="https://mpv.io/manual/stable/#options-audio-pitch-correction"/>

### Audio channels <Badge text="Auto-safe" type="info" />

Control which audio channels are output. Values are as follows:

- **Auto-safe** - Use the system's preferred channel layout. If there is none, force stereo.
- **Auto** - Send the audio device whatever it accepts, preferring the audio's original channel layout.
- **Mono** - Force the player to output the audio on a single channel.
- **Stereo** - Force the player to output to dual channel.
- **Reverse stereo** - Stereo but the channels are reversed.

### Volume boost cap <Badge text="30" type="info" />

Limit on how higher above 100% the volume can go.
