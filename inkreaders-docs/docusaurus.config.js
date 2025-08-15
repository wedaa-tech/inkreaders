    // @ts-check
    // `@type` JSDoc annotations allow editor autocompletion and type checking
    // (when paired with `@ts-check`).
    // There are various equivalent ways to declare your Docusaurus config.
    // See: https://docusaurus.io/docs/api/docusaurus-config

    import {themes as prismThemes} from 'prism-react-renderer'; // This import is correct and will be used

    // REMOVE these two lines, or comment them out:
    // const lightCodeTheme = require('prism-react-renderer/themes/github');
    // const darkCodeTheme = require('prism-react-renderer/themes/dracula');


    // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

    /** @type {import('@docusaurus/types').Config} */
    const config = {
      title: 'InkReaders Docs', // Updated title
      tagline: 'Documentation for InkReaders products and services', // Updated tagline
      favicon: 'img/favicon.ico',

      // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
      future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
      },

      // Set the production url of your site here
      url: 'https://inkreaders.com',
      // Set the /<baseUrl>/ pathname under which your site is served
      // For GitHub pages deployment, it is often '/<projectName>/'
      baseUrl: '/docs/',

      // GitHub pages deployment config.
      // If you aren't using GitHub pages, you don't need these.
      organizationName: 'facebook', // Usually your GitHub org/user name.
      projectName: 'docusaurus', // Usually your repo name.

      onBrokenLinks: 'throw',
      onBrokenMarkdownLinks: 'warn',

      // Even if you don't use internationalization, you can use this field to set
      // useful metadata like html lang. For example, if your site is Chinese, you
      // may want to replace "en" with "zh-Hans".
      i18n: {
        defaultLocale: 'en',
        locales: ['en'],
      },

      presets: [
        [
          'classic',
          /** @type {import('@docusaurus/preset-classic').Options} */
          ({
            docs: {
              path: 'docs',
              routeBasePath: '/', // ✅ change this to `/` if using `/docs/` in baseUrl
              sidebarPath: require.resolve('./sidebars.js'),
              // Please change this to your repo.
              // Remove this to remove the "edit this page" links.
              editUrl:
                'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            },
            blog: {
              showReadingTime: true,
              feedOptions: {
                type: ['rss', 'atom'],
                xslt: true,
              },
              // Please change this to your repo.
              // Remove this to remove the "edit this page" links.
              editUrl:
                'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
              // Useful options to enforce blogging best practices
              onInlineTags: 'warn',
              onInlineAuthors: 'warn',
              onUntruncatedBlogPosts: 'warn',
            },
            theme: {
              customCss: './src/css/custom.css',
            },
          }),
        ],
      ],

      themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
          image: 'img/docusaurus-social-card.jpg',
          navbar: {
            title: 'InkReaders Docs', // Consistent title
            logo: {
              alt: 'My Site Logo',
              src: 'img/logo.svg',
            },
            items: [
              // Links to Hugo (Home and Blogs)
              {
                href: 'https://inkreaders.com/',
                label: 'Home',
                position: 'left',
              },
              {
                href: 'https://inkreaders.com/posts/', // Assuming /posts/ for blogs
                label: 'Blogs',
                position: 'left',
              },
              // Link to React App
              {
                href: 'https://app.inkreaders.com/',
                label: 'Our App',
                position: 'left',
              },
              // Internal Docusaurus Docs (Tutorial)
              {
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',
                position: 'left',
                label: 'Documentation', // Renamed for clarity
                to: '/intro',
              },
              // Internal Docusaurus Blog
              {to: '/blog', label: 'Docusaurus Blog', position: 'left'}, // Clarified label
              {
                href: 'https://github.com/facebook/docusaurus',
                label: 'GitHub',
                position: 'right',
              },
            ],
          },
          footer: {
            style: 'dark',
            links: [
              {
                title: 'Docs',
                items: [
                  {
                    label: 'Tutorial',
                    to: '/intro',
                  },
                ],
              },
              {
                title: 'Community',
                items: [
                  {
                    label: 'Stack Overflow',
                    href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                  },
                  {
                    label: 'Discord',
                    href: 'https://discordapp.com/invite/docusaurus',
                  },
                  {
                    label: 'Twitter',
                    href: 'https://twitter.com/docusaurus',
                  },
                ],
              },
              {
                title: 'More',
                items: [
                  {
                    label: 'Blog',
                    to: '/blog',
                  },
                  {
                    label: 'GitHub',
                    href: 'https://github.com/facebook/docusaurus',
                  },
                ],
              },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} InkReaders, Inc. Built with Docusaurus.`,
          },
          prism: {
            theme: prismThemes.github, // <--- IMPORTANT: Use prismThemes.github
            darkTheme: prismThemes.dracula, // <--- IMPORTANT: Use prismThemes.dracula
          },
        }),
    };

    export default config;
    