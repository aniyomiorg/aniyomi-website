import type { DefaultTheme } from "vitepress"

import nav from "./navigation/navbar"
import sidebar from "./navigation/sidebar"

const themeConfig: DefaultTheme.Config = {
	logo: {
		src: "/img/logo-128px.png",
		width: 24,
		height: 24,
	},

	nav,
	sidebar,

	outline: [2, 3],

	socialLinks: [
		{
			icon: "github",
			link: "https://github.com/aniyomiorg/aniyomi",
			ariaLabel: "Project GitHub",
		},
		{
			icon: "discord",
			link: "https://discord.gg/F32UjdJZrR",
			ariaLabel: "Discord Server",
		},
	],

	footer: {
		message: "<a href=\"https://www.apache.org/licenses/LICENSE-2.0\" target=\"_blank\">Open-source Apache Licensed</a> <span class=\"divider\">|</span> <a href=\"/privacy/\">Privacy policy</a> <span class=\"divider\">|</span> Powered by <a target=\"_blank\" href=\"https://www.netlify.com/\">Netlify <img src=\"/img/logo-netlify.svg\" alt=\"Netlify Logo\" height=\"12px\" width=\"12px\" style=\"display: inline-block\"></a>",
		copyright: `Copyright © 2015 - ${new Date().getFullYear()} Javier Tomás`,
	},

	editLink: {
		pattern: "https://github.com/aniyomiorg/aniyomi-website/edit/master/website/src/:path",
		text: "Help us improve this page",
	},

	lastUpdated: {
		text: "Last updated",
		formatOptions: {
			forceLocale: true,
			dateStyle: "long",
			timeStyle: "short",
		},
	},

	search: {
		provider: "algolia",
		options: {
			// appId: "2C8EHFTRW7",
			apiKey: "fc1c45b5a3835e1882cbbf0751dfe705",
			indexName: "aniyomi",
		},
	},
}

export default themeConfig
