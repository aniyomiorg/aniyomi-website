---
title: Advanced player settings
titleTemplate: Player settings
description: Advanced settings for the video player.
---

# Advanced video player settings

This section relates to customizing the watching experience in the app.

::: warning
This page explores some advanced features.
:::

## Edit MPV configuration file <Badge text="None" type="info" />
Aniyomi employs the [mpv-android](https://github.com/mpv-android/mpv-android) player, offering the ability to extensively configure its settings via a dedicated configuration file. With this feature, you can conveniently edit the configuration file directly within the app.
For further details about the configuration file, refer to [mpv's documentation](https://mpv.io/manual/stable/#configuration-files).

## Edit MPV input file <Badge text="None" type="info" />
Aniyomi can also use some of mpv's keybinds, which can be configured here.
For further details about the input file, refer to [mpv's documentation](https://mpv.io/manual/stable/#command-interface).

## Edit advanced subtitle track select configuration

The configuration file is a json with the following structure:

```json
{
  "lang": ["eng", "swe"],
  "blacklist": ["Signs", "Songs"],
  "whitelist": ["Full Subtitles", "Dialog"]
}
```

where `lang`, `blacklist`, and `whitelist` are all optional fields. `lang` indicates which languages to include, enter values as either a two or three-letter [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
**Aniyomi** will choose the first language in `lang` that has a subtitle, and then filter only those of that language. If no `lang` is set, only the app's language will be used.
`blacklist` and `whitelist` are lists of blacklisted and whitelisted keywords, respectively. The keywords are case-insensitive.

First, **Aniyomi** will filter out any subtitle names that contain a blacklisted keyword, and then filter out all languages that aren't the same as the first match in `lang`.
From that filtered list, **Aniyomi** will pick the first subtitle which either contains a whitelisted keyword or the first item in the filtered list if `whitelist` isn't defined.
If no subtitles remain after filtering, the first subtitle in the subtitle list will be picked, regardless of the subtitle configuration.

## Enable gpu-next <Badge text="Off" type="info" />
Use experimental video renderer. Should generally be faster and higher quality, but may cause issues on older phones. Disable if issues occur.

## Debanding <Badge text="Disabled" type="info" />
Depending on the Phone model, mpv can sometimes be unable to play videos with certain codecs (mostly h.264 10bit) and will show black screen instead. Use one of these options if you've faced this issue.
- **Disabled** - No debanding, Video will be played as it is.
- **CPU** - Uses the CPU to deband. also has the side effect of converting video to 8bit color. This is the slowest option but works on most devices.
- **GPU** - Uses hardware acceleration for debanding. Faster option but may not be compatible with all devices.
- **YUV420P** - Transforms the video into the YUV420P format, providing optimal speed and compatibility. Also has the side effect of turning the video into 8bit color.

## Enable MPV scripts <Badge text="Off" type="info" />
Enable the use of lua scripts, placed in the `mpv-config/scripts` subdirectory under your storage location. Refer to [mpv's documentation](https://mpv.io/manual/master/#lua-scripting) for more details.
