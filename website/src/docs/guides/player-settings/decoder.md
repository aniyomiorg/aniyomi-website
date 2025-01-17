---
title: Decoder settings
titleTemplate: Player settings
description: Decoder settings for the video player.
---

<script setup>
import MpvLink from "@theme/components/MpvLink.vue";
</script>

# Decoder

This section deals with settings for decoding/rendering.

## Options

### Try hardware decoding <Badge text="On" type="info" />

Enable to use any hardware decoder, if available.

### Enable gpu-next <Badge text="Off" type="info" />

Enable to use gpu-next. Disable if the video turns purple. <MpvLink link="https://mpv.io/manual/stable/#video-output-drivers-gpu-next"/>

### Debanding <Badge text="None" type="info" />

Depending on the phone model, mpv can sometimes be unable to play videos with certain codecs (mostly h.264 10bit) and will show black screen instead. Use one of these options if you've faced this issue.
- **None** - No debanding, video will be played as it is.
- **CPU** - Uses the CPU to deband. also has the side effect of converting video to 8bit color. This is the slowest option but works on most devices.
- **GPU** - Uses hardware acceleration for debanding. Faster option but may not be compatible with all devices.

### Use YUV420P pixel format <Badge text="On" type="info" />

See option description.
