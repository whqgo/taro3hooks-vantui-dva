
/*
 * @Author: whq
 * @Date: 2022-07-27 10:48:59
 * @LastEditTime: 2022-07-28 14:35:47
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\pages\login\index.tsx
 */
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Input, View } from "@tarojs/components";
import { Button, Dialog, Form, FormItem, Icon } from '@antmjs/vantui'
import './index.less'
import Taro from "@tarojs/taro";
import { useDispatch, useStore } from 'react-redux';
import { getLoginApi, getTokenApi } from "../../services/api";

const Index = () => {
  const formIt = useRef<any>(null)
  const [formData, setFormData] = useState<any>({
    username: '111',
    password: '1111',
  })

  const dispatch = useDispatch();
  // console.log(useStore().getState(), "===user===");
  // 注册不能回调函数设置必填的提示文案
  useLayoutEffect(() => {
    if (!formIt) return
    formIt?.current.registerRequiredMessageCallback((label) => {
      return `${label}不能为空!`
    })
  }, [formIt])

  //登录触发
  const submitFun = () => {
    formIt.current.validateFields(async (errorMessage, fieldValues) => {
      if (!errorMessage || !errorMessage.length) {
        // console.log(formData, "formData====");
        // await getLoginApi(formData)
        // let res = await getTokenApi()
        // if(res?.data && res.data.success){
        //   console.log(res?.data?.data?.content,"=res?.data?.data?.content=");
          Taro.switchTab({url:'/pages/index/index'})
        // dispatch({
        //   type:'login/addUser',
        //   payload:res?.data?.data?.content || {} // 用户信息
        // })
        // Taro.switchTab({url:'/pages/index/index'})
        // }else{
        //   Taro.reLaunch({url:'/pages/login/index'})
        // }
      }
    })
  }
  return (
    <View className="loginwrapper" style={{ 'padding': '20% 30rpx 30rpx 30rpx' }}>
      <View style={{ 'marginBottom': '60rpx', 'fontSize': '36rpx' }}>XXXXXX</View>
      <View>
        <Form
          initialValues={formData}
          ref={formIt}
          className='loginForm'
          onFinish={(errs, res) => console.info(errs, res)}
        >
          <FormItem
            label="用户名"
            name="username"
            required
            trigger="onInput"
            validateTrigger="onBlur"
            valueFormat={(e) => setFormData({ ...formData, username: e.detail.value })}
            renderRight={<Icon name="user-o" />}
          >
            <Input placeholder="请输入用户名" />
          </FormItem>

          <FormItem
            label="密码"
            name="password"
            required
            trigger="onInput"
            validateTrigger="onBlur"
            valueFormat={(e) => setFormData({ ...formData, password: e.detail.value })}
            renderRight={<Icon name="eye-o" />}
          >
            <Input password placeholder='这是一个密码输入框' />
          </FormItem>
          <Button
            type="primary"
            style={{ 'width': '100%', 'marginTop': '30rpx' }}
            onClick={submitFun}
            formType="submit"
          >
            提交
          </Button>
        </Form>
      </View>
    </View>
  );
};

export default Index;
