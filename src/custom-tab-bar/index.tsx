/*
 * @Author: whq
 * @Date: 2022-07-28 10:52:54
 * @LastEditTime: 2022-07-28 14:23:42
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\custom-tab-bar\index.tsx
 */
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import { Tabbar, TabbarItem } from '@antmjs/vantui'
import './index.less'
import { useDispatch, useStore, useSelector } from 'react-redux';
const Index = () => {
  const [state, setState] = useState<any>({
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
  })
  const dispatch = useDispatch();
  const tabberArr :any= useSelector<any>(
    (state) => state.customtabbar.tabberArr
  );
  useEffect(()=>{
    console.log(tabberArr,"tabberArr============================");
    
  },[tabberArr])
  //1
  // console.log(useStore().getState(), "=================123==================");
  // console.log(tabberArr, "=================tabberArr==================");
  return (
    <>
      <Tabbar active={tabberArr.selected} >
        {tabberArr.list.map((item, index) => {
          return (
            <TabbarItem key={index} icon={item.iconPath} onClick={() => {
              dispatch({
                type:'customtabbar/emitSelected',
                payload:index
              })
              Taro.switchTab({ url: item.pagePath })
            }}>{item.text}{tabberArr.selected}</TabbarItem>
          )
        })}
      </Tabbar>
    </>
  )
}
export default Index