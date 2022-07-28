/*
 * @Author: whq
 * @Date: 2022-07-28 11:00:06
 * @LastEditTime: 2022-07-28 14:23:11
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\pages\my\index.tsx
 */
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'
import { useDispatch, useStore } from 'react-redux';
import './index.less'
import Taro, { useDidShow } from '@tarojs/taro';
import { useMemo } from 'react';

const Index=()=>{
  // const page = useMemo(() => Taro.getCurrentInstance().page, [])
  // useDidShow(() => {
  //   const tabbar = Taro.getTabBar<any>(page)
  //   console.log(page,"tabbar1111111111");
  //   tabbar?.setSelected(1)
  // })
  console.log(useStore().getState(),"================个人中心===================");
  // console.log(page,"tabbar1111111111");
  
  return (
    <View>
        个人中心
    </View>
  )
}
export default Index;