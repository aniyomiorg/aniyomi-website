import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/download/': defaultSidebar(),
  '/extensions/': defaultSidebar(),
  '/docs/': defaultSidebar(),
  '/forks/': defaultSidebar(),
  '/changelogs/': defaultSidebar(),
  '/news/': defaultSidebar(),
  '/sandbox/': defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: 'Download',
          link: '/download/',
        },
        {
          text: 'Changelogs',
          link: '/changelogs/',
        },
        {
          text: 'Forks',
          link: '/forks/',
        },
        {
          text: 'Contribute',
          link: '/docs/contribute',
        },
      ],
    },
    {
      text: 'Frequently Asked Questions',
      items: [
        { text: 'General', link: '/docs/faq/general' },
        {
          text: 'Library',
          link: '/docs/faq/library',
        },
        {
          text: 'Updates',
          collapsed: true,
          items: [
            { text: 'Smart updates', link: '/docs/faq/updates/smart' },
            { text: 'Upcoming', link: '/docs/faq/updates/upcoming' },
          ],
        },
        {
          text: 'Browse',
          link: '/docs/faq/browse/',
          collapsed: true,
          items: [
            { text: 'Extensions', link: '/docs/faq/browse/extensions' },
            {
              text: 'Local source',
              link: '/docs/faq/browse/local-source',
            },
          ],
        },
        {
          text: 'Downloads',
          link: '/docs/faq/downloads',
        },
        {
          text: 'Reader',
          link: '/docs/faq/reader',
        },
        {
          text: 'Settings',
          link: '/docs/faq/settings',
        },
        {
          text: 'Storage',
          link: '/docs/faq/storage',
        },
      ],
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Getting started',
          link: '/docs/guides/getting-started',
        },
        {
          text: 'Troubleshooting',
          link: '/docs/guides/troubleshooting/',
          collapsed: true,
          items: [
            {
              text: 'Common issues',
              link: '/docs/guides/troubleshooting/common-issues',
            },
            {
              text: 'Diagnosis',
              link: '/docs/guides/troubleshooting/diagnosis',
            },
          ],
        },
        {
          text: 'Source migration',
          link: '/docs/guides/source-migration',
        },
        { text: 'Backups', link: '/docs/guides/backups' },
        { text: 'Tracking', link: '/docs/guides/tracking' },
        { text: 'Categories', link: '/docs/guides/categories' },
        {
          text: 'Local manga source',
          link: '/docs/guides/local-manga-source/',
          collapsed: true,
          items: [
            {
              text: 'Advanced editing',
              link: '/docs/guides/local-manga-source/advanced',
            },
          ],
        },
        {
          text: 'Local anime source',
          link: '/docs/guides/local-anime-source/',
          collapsed: true,
          items: [
            {
              text: 'Advanced editing',
              link: '/docs/guides/local-anime-source/advanced',
            },
          ],
        },
        {
          text: 'Reader settings',
          link: '/docs/guides/reader-settings',
        },
        {
          text: 'Player settings',
          link: '/docs/guides/player-settings/',
          collapsed: true,
          items: [
            {
              text: 'Advanced player settings',
              link: '/docs/guides/player-settings/advanced-player-settings',
            },
          ],
        },
        {
          text: 'Video player',
          link: '/docs/guides/video-player/',
          collapsed: true,
          items: [
            {
              text: 'Audio and subtitle settings',
              link: '/docs/guides/video-player/audio-and-subtitle-settings',
            },
          ],
        },
        {
          text: 'Shizuku',
          link: '/docs/guides/shizuku',
        },
      ],
    },
  ]
}

export default sidebar
