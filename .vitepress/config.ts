import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Typescript 实战手册",
  description: "Ts工具类型实现、实战用法等",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工具类型实现详解', link: '/ToolType/index' }
    ],

    sidebar: {
      '/ToolType/': [
        {
          text: '简单',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ]
        },
        {
          text: '中等',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ]
        },
        {
          text: '困难',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
