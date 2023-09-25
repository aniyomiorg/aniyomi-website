---
title: Animiru
titleTemplate: false
description: Aniyomi without the manga features from Tachiyomi - Focused in anime.

layout: home
pageClass: page-animiru

hero:
  name: Animiru
  text: Anime-only
  tagline: Aniyomi without the manga features from Tachiyomi - Focused in anime.
  image: /forks/logo-animiru.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/Quickdesh/Animiru/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/Quickdesh/Animiru

customMetaTitle: Animiru

features:
  - title: Discord rich presence
    details: Let people know that you're a cultured one!
    icon: <img src="/img/logo-discord.svg" alt="Discord Logo" height="32" width="32">
  - title: Smaller app size
    details: Without the manga features, the app is almost half the size of Aniyomi.
    icon: 🤏

theme: "#ec45fd"
image: /forks/logo-animiru.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/animiru.styl"
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/Quickdesh.png",
    name: "Quickdesh",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/Quickdesh" }
    ]
  }
]
</script>
