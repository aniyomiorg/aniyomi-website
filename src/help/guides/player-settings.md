---
title: Player settings
description: Player settings for Aniyomi.
lang: en-US
---

# Player settings
This section relates to the watching experience in the app and navigating the player.

## At what point to mark the episode as seen <Badge text="85%" type="default-indicator" vertical="middle" />
This setting let's you configure after watching how much percentage of episode should it be automatically marked as seen.

**100%**
- This option will mark the episode as seen in app only after you watch it till the end.

**95%**
- This option will mark the episode as seen after you went past the first 95% of episode .

**90%**
- This option will mark the episode as seen after you went past the first 90% of episode .

**85%**
- This option will mark the episode as seen after you went past the first 85% of episode .

**80%**
- This option will mark the episode as seen after you went past the first 80% of episode .

**75%**
- This option will mark the episode as seen after you went past the first 75% of episode .

**70%**
- This option will mark the episode as seen after you went past the first 70% of episode .

## Double tap to skip length <Badge text="10s" type="default-indicator" vertical="middle" />
Double tapping on left or right portion of the player will skip video forward or backward respectively by selected time.

**30s**
- Applying this option will skip the episode by 30 seconds.

**20s**
- Applying this option will skip the episode by 20 seconds.

**10s**
- Applying this option will skip the episode by 10 seconds.

**5s**
- Applying this option will skip the episode by 5 seconds.

## Show content in display cutout <Badge text="True" type="default-indicator" vertical="middle" />
This option toggles margin to the left side of player so that phones with notch won't obstruct the player UI.

<Carousel name="carousel-crop-borders">
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
</Carousel>

## Always use external player <Badge text="Fasle" type="default-indicator" vertical="middle" />
For those people who want to use external players like MX Player or MPV as a default player can toggle this option on.

## External player preference <Badge text="None" type="default-indicator" vertical="middle" />
Shows you list of players curretnly installed in your phone which are supported by Aniyomi as external player and let's you select your prefered one.

**None**
- If 'None' option is selcted then Aniyomi will present you with all the supported external players available in your phone when you tap on an episode to play it.

::: c-tip
Below 'None' all the other external players available in your phone will be displayed and selecting one of them will make it default for Aniyomi.
:::

## Enable picture in picture mode <Badge text="false" type="default-indicator" vertical="middle" />
As the name suggests it enables 'Picture in Picture' functionality.

::: c-warning
Note that this is still an experimental feature.
:::
