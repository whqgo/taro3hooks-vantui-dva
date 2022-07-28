import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'
import { useDispatch, useStore } from 'react-redux';
import './index.less'
import Taro, { useDidShow } from '@tarojs/taro';
import { useMemo } from 'react';

import type CustomTabBar from '../../custom-tab-bar'
const Index=()=>{
  // const page = useMemo(() => Taro.getCurrentInstance().page, [])
  // useDidShow(() => {
  //   const tabbar = Taro.getTabBar<any>(page)
  //   console.log(tabbar,"tabbar000000000000000000");
  //   tabbar?.setSelected(0)
  // })
  
  // console.log(useStore().getState(),"========3333===========================");
  // console.log(page,"tabbar000000000000");
  return (
    <View>
        首页
    </View>
  )
}
export default Index;