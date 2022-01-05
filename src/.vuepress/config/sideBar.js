module.exports = {
	default: [
		{
			title: "Frequently Asked Questions",
			path: "/help/faq/",
		},
		{
			title: "Guides",
			collapsable: false,
			sidebarDepth: 2,
			children: [
				"/help/guides/getting-started",
				"/help/guides/troubleshooting",
				"/help/guides/source-migration",
				"/help/guides/backups",
				"/help/guides/tracking",
				"/help/guides/categories",
				"/help/guides/local-anime",
				"/help/guides/reader-settings",
			],
		},
		{
			title: "Aniyomi",
			collapsable: false,
			sidebarDepth: 2,
			children: ["/help/contribution", "/download/", "/extensions/"],
		},
	],
	sandbox: [
		"/",
		{
			title: "Sandbox",
			path: "/sandbox/",
			collapsable: false,
			sidebarDepth: 2,
			children: ["/sandbox/style-guide", "/sandbox/element-ui"],
		},
	],
};
