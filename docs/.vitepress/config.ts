import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Remnawave',
  description: 'Documentation for Remnawave',
  base: '/remnawave-docs/',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Remnawave',
    
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Ничего не найдено',
                resetButtonTitle: 'Сбросить поиск',
                footer: {
                  selectText: 'выбрать',
                  navigateText: 'перейти',
                  closeText: 'закрыть'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'select',
                  navigateText: 'navigate',
                  closeText: 'close'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/blagodaren/remnawave-docs' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Remnawave'
    }
  },

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      title: 'Remnawave',
      description: 'Документация Remnawave',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Документация', link: '/introduction' }
        ],
        sidebar: [
          {
            text: 'Введение',
            items: [
              { text: 'О Remnawave', link: '/introduction' }
            ]
          },
          {
            text: 'Быстрый старт',
            items: [
              { text: 'Быстрый старт', link: '/installation/quick-start' },
              { text: 'Переменные окружения', link: '/installation/env-variables' },
              {
                text: 'Обратные прокси',
                collapsed: true,
                items: [
                  { text: 'Nginx', link: '/installation/reverse-proxies/nginx' },
                  { text: 'Caddy', link: '/installation/reverse-proxies/caddy' },
                  { text: 'Try Cloudflare', link: '/installation/reverse-proxies/cloudflare' },
                  { text: 'Traefik', link: '/installation/reverse-proxies/traefik' }
                ]
              },
              {
                text: 'Установка Node',
                collapsed: true,
                items: [
                  { text: 'Быстрый старт', link: '/installation/node/quick-start' },
                  { text: 'Переменные окружения', link: '/installation/node/env-variables' }
                ]
              }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Remnawave',
      description: 'Remnawave Documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Documentation', link: '/en/introduction' }
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'About Remnawave', link: '/en/introduction' }
            ]
          },
          {
            text: 'Installation',
            items: [
              { text: 'Quick start', link: '/en/installation/quick-start' },
              { text: 'Env variables', link: '/en/installation/env-variables' },
              {
                text: 'Reverse Proxies',
                collapsed: true,
                items: [
                  { text: 'Nginx', link: '/en/installation/reverse-proxies/nginx' },
                  { text: 'Caddy', link: '/en/installation/reverse-proxies/caddy' },
                  { text: 'Try Cloudflare', link: '/en/installation/reverse-proxies/cloudflare' },
                  { text: 'Traefik', link: '/en/installation/reverse-proxies/traefik' }
                ]
              },
              {
                text: 'Node install',
                collapsed: true,
                items: [
                  { text: 'Quick start', link: '/en/installation/node/quick-start' },
                  { text: 'Env variables', link: '/en/installation/node/env-variables' }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}) 