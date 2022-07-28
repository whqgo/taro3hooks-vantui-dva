/*
 * @Author: whq
 * @Date: 2022-07-27 17:22:49
 * @LastEditTime: 2022-07-28 13:01:04
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\app.config.ts
 */

export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/index/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  animation: false,
  tabBar: {
    color: '#bbc0ca',
    selectedColor: '1f83e1',
    backgroundColor: '#feffff',
    borderStyle: 'white',
    custom: true,//启动自定义tabBar
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/my/index',
        text: '个人中心'
      },
    ]
  }
}
)