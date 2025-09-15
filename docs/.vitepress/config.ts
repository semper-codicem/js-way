import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'JS Way',
  description: 'JavaScript learning path documentation',
  lang: 'en-US',
  
  head: [
    // Google AdSense
    ['script', {
      async: 'true',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2312024156935185',
      crossorigin: 'anonymous'
    }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/index' },
      { text: 'Fundamentals', link: '/fundamentals/index' },
      { text: 'API', link: '/api/index' },
      { text: 'Development', link: '/development/index' },
      { text: 'Tools', link: '/tools/index' },
      { text: 'About', link: '/about/index' }
    ],

    sidebar: {
      // Default sidebar
      '/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/getting-started' },
            { text: 'Installation', link: '/installation' },
            { text: 'Quick Start', link: '/quick-start' }
          ]
        },
        {
          text: 'Tools',
          items: [
            { text: 'Visual Studio Code', link: '/vscode' },
            { text: 'Git & GitHub', link: '/git-github' },
            { text: 'Package Managers', link: '/package-managers' }
          ]
        },
        {
          text: 'AdSense',
          items: [
            { text: 'Guide', link: '/adsense-guide' },
            { text: 'Implementation', link: '/adsense-implementation' }
          ]
        },
        {
          text: 'Resources',
          items: [
            { text: 'Useful Links', link: '/links' },
            { text: 'Community', link: '/communities' }
          ]
        }
      ],

      // Guide sidebar
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Introduction', link: '/guide/README' }
          ]
        }
      ],

      // Fundamentals sidebar
      '/fundamentals/': [
        {
          text: 'Fundamentals',
          items: [
            { text: 'Introduction', link: '/fundamentals/README' }
          ]
        },
        {
          text: 'Basics',
          items: [
            { text: 'Introduction', link: '/fundamentals/basics/introduction' },
            { text: 'What to Learn', link: '/fundamentals/basics/what_to_learn' },
            { text: 'Syntax and Structure', link: '/fundamentals/basics/syntax_and_structure' },
            { text: 'Variables', link: '/fundamentals/basics/variables' }
          ]
        }
      ],

      // API sidebar
      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Introduction', link: '/api/README' },
            { text: 'Authentication', link: '/api/authentication' }
          ]
        }
      ],

      // Development sidebar
      '/development/': [
        {
          text: 'Development',
          items: [
            { text: 'Best Practices',
              items: [
                { text: 'Code Style', link: '/development/best-practices/code-style' }
              ]
            }
          ]
        }
      ],

      // Tools sidebar
      '/tools/': [
        {
          text: 'Tools',
          items: [
            { text: 'VS Code', link: '/tools/vscode' },
            { text: 'Extensions',
              items: [
                { text: 'Essential Extensions', link: '/tools/extensions/essential' }
              ]
            }
          ]
        }
      ],

      // About sidebar
      '/about/': [
        {
          text: 'About',
          items: [
            { text: 'Introduction', link: '/about/README' },
            { text: 'Contributing', link: '/about/contributing' },
            { text: 'License', link: '/about/license' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/semper-codicem/js-way' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2023-present'
    }
  }
})