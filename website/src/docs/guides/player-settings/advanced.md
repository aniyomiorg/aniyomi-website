---
title: Advanced player settings
titleTemplate: Player settings
description: Advanced settings for the video player.
---

<script setup>
import MpvLink from "@theme/components/MpvLink.vue";
</script>

# Advanced video player settings

This section relates to customizing the watching experience in the app.

::: warning
This page explores some advanced features.
:::

## Options

### Enable MPV scripts <Badge text="Off" type="info" />

Enable the use of lua scripts, placed in the `mpv-config/scripts` subdirectory under your storage location. <MpvLink link="https://mpv.io/manual/master/#lua-scripting"/>

### Edit MPV configuration file <Badge text="None" type="info" />

Aniyomi employs the [mpv-android](https://github.com/mpv-android/mpv-android) player, offering the ability to extensively configure its settings via a dedicated configuration file. With this feature, you can conveniently edit the configuration file directly within the app. <MpvLink link="https://mpv.io/manual/stable/#configuration-files"/>

### Edit MPV input file <Badge text="None" type="info" />
Aniyomi can also use some of mpv's keybinds, which can be configured here. <MpvLink link="https://mpv.io/manual/stable/#command-interface"/>
