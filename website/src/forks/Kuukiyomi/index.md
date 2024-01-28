---
title: Kuukiyomi
titleTemplate: false
description: Implements features from various Tachiyomi forks, such as TachiyomiSY and others.

layout: home
pageClass: page-kuukiyomi

hero:
  name: Kuukiyomi
  text: All in one
  tagline: Implements features from various Tachiyomi forks, such as TachiyomiSY and others.
  image: /forks/logo-kuukiyomi.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/LuftVerbot/Kuukiyomi/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/LuftVerbot/Kuukiyomi

customMetaTitle: Kuukiyomi

features:
  - title: Discord rich presence (from Animiru)
    details: Let people know that you're a cultured one!
    icon: <img src="/img/logo-discord.svg" alt="Discord Logo" height="32" width="32">
  - title: Torrent Streaming
    details: Introduces Torrent Streaming. (Right Extensions are needed).
    icon: <img src="/img/logo-torrent.svg" alt="Torrent Logo" height="32" width="32">
  - title: Double-page for Tablets (from TachiyomiSY)
    details: Combine 2 pages while reading into a single one for a better tablet experience.
    icon: 📖

theme: "#EE7E1F"
image: /forks/logo-kuukiyomi.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/kuukiyomi.styl"
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/LuftVerbot.png",
    name: "LuftVerbot",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/LuftVerbot" }
    ]
  },
  {
    avatar: "https://github.com/Diegopyl1209.png",
    name: "Diegopyl1209",
    title: "Torrent Support",
    links: [
      { icon: "github", link: "https://github.com/Diegopyl1209" }
    ]
  },
  {
    avatar: "https://www.github.com/jobobby04.png",
    name: "jobobby04",
    title: "Creator of TachiyomiSY",
    links: [
      { icon: "github", link: "https://github.com/jobobby04" }
    ]
  },
  {
    avatar: "https://www.github.com/Quickdesh.png",
    name: "Quickdesh",
    title: "Creator of Animiru",
    links: [
      { icon: "github", link: "https://github.com/Quickdesh" }
    ]
  }

]
</script>
