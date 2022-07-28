/*
 * @Author: whq
 * @Date: 2022-07-28 09:39:48
 * @LastEditTime: 2022-07-28 10:23:12
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\pages\login\model.ts
 */
export default {
    namespace: 'login',
    state: {
      ininUser:{}
    },
  
    effects: {},
    //方法 dispatch 触发
    reducers: {
      addUser(state, { payload }) {
        let payloadData={
            ininUser:payload
        }
        return { ...state, ...payloadData };
      },
    },
  };