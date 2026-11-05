import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Minecraft Plugins Wiki',
  tagline: 'Minecraftのプラグインの解説を置いておくWikiです。',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: false,
  },

  // Set the production url of your site here
  url: 'https://mcpluginswiki.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'minecraftpluginwiki', // Usually your GitHub org/user name.
  projectName: 'wikipage', // Usually your repo name.

  onBrokenLinks: 'throw',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/minecraftpluginwiki/wikipage/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Minecraft Plugins Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'wiki',
        },
        {
          href: 'https://github.com/minecraftpluginwiki/wikipage',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Link',
          items: [
            {
              label: 'SpigotMC',
              href: 'https://www.spigotmc.org/',
            },
            {
              label: 'PaperMC',
              href: 'https://papermc.io/',
            },
            {
              label: 'modrinth',
              href: 'https://modrinth.com/',
            },
            {
              label: 'Hangar(papermc.io)',
              href: 'https://hangar.papermc.io/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Wikiリポジトリ',
              href: 'https://github.com/minecraftpluginwiki/wikipage',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Minecraft Plugins Wiki. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        // 日本語と英語の両方で検索できるようにする
        language: ['ja', 'en'],
        // 先ほど docs の routeBasePath を '/' にした場合はここも '/' に合わせる
        docsRouteBasePath: '/',
        indexDocs: true,
        indexBlog: false, // ブログは無効化したので false
        indexPages: false,
        // 開発環境 (npm start) でも検索バーを表示・テストする
        searchResultLimits: 8,
      },
    ],
  ],

};

export default config;
