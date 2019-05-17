module.exports = {
    title: 'Young UI',
    description: '一个简洁好用的UI框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
          ],
        sidebar: [
          '/',
          {
              title:'入门',
              children:['/install/','/get-started/']
          },
          {
              title:'组件',
              children:['/components/button']
          }
        ]
      }
  }