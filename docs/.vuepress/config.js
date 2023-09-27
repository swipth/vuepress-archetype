module.exports = {
  base: '/docs/',
  dest: 'docs/docs_dist',
  title: 'PharmaBlock',
  description: 'PharmaBlock purchasing',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],
  themeConfig: {
    logo: '/img/logo_index.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '第三方链接', link: 'https://purchasing.pharmablock.com', target:'_blank' },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [
        '',      /* /guide/ */
        'other', /* /guide/function.html */
        'contact', /* /guide/contact.html */
        'thanks', /* /guide/thanks.html */
      ],
    },
    displayAllHeaders: true
  },
  plugins: [
    "@vuepress/plugin-medium-zoom", //  大图查看插件
    'fulltext-search',  //  全局搜索插件
    '@vuepress/back-to-top' //  回到顶部插件
  ]
}
