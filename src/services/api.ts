/*
 * @Author: whq
 * @Date: 2022-07-27 17:41:04
 * @LastEditTime: 2022-07-28 09:32:41
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\services\api.ts
 */
import Taro from '@tarojs/taro';
import httpService from './httpService';

//登出
const getLogoutApi = async (data) => {
  let res = await httpService.post(process.env.javaApi + '/verify/logout', {
    data
  })
  console.log(res, "====r===eee=getLoginApi===");
}
// 获取用户信息
const getTokenApi = async () => {
  return await httpService.post(process.env.javaApi + '/verify/token', {
  })
}
//登录 获取token 存到本地
const getLoginApi = async (data) => {
  let res:any = await httpService.post(process.env.javaApi + '/auth/login', {
    data
  })

  Taro.setStorageSync('TOKEN',res.header.Authorization)
}
export {
  getTokenApi,
  getLoginApi,
  getLogoutApi
}