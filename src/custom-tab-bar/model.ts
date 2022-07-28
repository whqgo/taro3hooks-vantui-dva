/*
 * @Author: whq
 * @Date: 2022-07-28 09:39:48
 * @LastEditTime: 2022-07-28 14:26:03
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\custom-tab-bar\model.ts
 */
export default {
  namespace: 'customtabbar',
  state: {
    tabberArr: {
      selected: 0,
      color: '#000000',
      selectedColor: '#DC143C',
      list: [
        {
          id: 0,
          pagePath: '/pages/index/index',
          // selectedIconPath: '../images/tabbar_home_on.png',
          iconPath: 'home-o',
          text: '首页'
        },
        {
          id: 1,
          pagePath: '/pages/my/index',
          // selectedIconPath: '../images/tabbar_my_on.png',
          iconPath: 'friends-o',
          text: '个人中心'
        }
      ]
    }
  },
  effects: {},
  //方法 dispatch 触发
  reducers: {
    emitSelected(state, { payload }) {
      return { ...state, tabberArr:{ ...state.tabberArr, selected: payload } };
    },
  },
};