---
title: Animetail
titleTemplate: false
description: Fork of Aniyomi with various features from Mihon forks, Cast support, and more.

layout: home
pageClass: page-animetail

hero:
  name: Animetail
  text: Full-featured fork
  tagline: Fork of Aniyomi with various features from Mihon forks, Cast support, and more.
  image: /forks/logo-animetail.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/Animetailapp/Animetail/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/Animetailapp/Animetail
    - theme: alt
      text: Preview
      link: https://github.com/Animetailapp/animetail-preview/releases/latest

customMetaTitle: Animetail

features:
  - title: Multi-fork features
    details: Implements features from various Mihon forks, such as TachiyomiSY, Komikku and TachiyomiJ2K.
    icon: 🧩
  - title: Cast Support
    details: Cast your favorite anime episodes directly to other screens or TVs.
    icon: 📺
  - title: Torrent Support
    details: Stream and watch video content using torrents directly (needs right extensions).
    icon: <img src="/img/logo-torrent.svg" alt="Torrent Logo" height="32" width="32">
  - title: Discord rich presence
    details: Optimized Discord Rich Presence for both Manga and Anime (no external API).
    icon: <img src="/img/logo-discord.svg" alt="Discord Logo" height="32" width="32">
  - title: Library Grouping
    details: Group your library entries by custom tags and categories for easier navigation.
    icon: 📂
  - title: Custom themes
    details: Unleash your creativity with fully customizable themes and colorful presets.
    icon: 🌈
  - title: Data saver
    details: Compresses images using resmush.it to save mobile data usage.
    icon: 📉
  - title: Anime & Manga Tracking
    details: Auto-track your progress with MyAnimeList, AniList, Kitsu, Simkl, Trakt, TMDB, Shikimori, and more.
    icon: 📈
  - title: Automatic Backups
    details: Keep your library safe by creating local or cloud backups synchronized with Google Drive.
    icon: 💾

theme: "#479d9a"
image: /forks/logo-animetail.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/animetail.styl"
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/Dark25.png",
    name: "Dark25",
    title: "Lead Developer",
    links: [
      { icon: "github", link: "https://github.com/Dark25" }
    ]
  }
]
</script>
