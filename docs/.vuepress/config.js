module.exports = {
    base:'/Vue-UI/',
    title: 'Young UI',
    description: '一个简洁好用的UI框架',
    themeConfig: {
      
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: 'https://vuepress.vuejs.org/zh/guide/' },
            { text: '扩展', link: 'https://google.com' },
          ],
        sidebar: [
          {
            title: '介绍',
            collapsable: false,
            children: [
                '/introduce/',
            ]
          },
          {
              title:'入门',
              collapsable: false,
              children:['/install/','/get-started/']
          },
          {
              title:'组件',
              collapsable: false,
              children:[
                '/components/button',
                '/components/tabs',
                '/components/input',
                '/components/grid',
                '/components/layout',
                '/components/toast',
                '/components/popover',
                '/components/collapse'
              ]
          }
        ]
      }
  }