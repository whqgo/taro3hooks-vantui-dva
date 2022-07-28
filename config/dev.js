/*
 * @Author: whq
 * @Date: 2022-07-27 17:22:49
 * @LastEditTime: 2022-07-28 14:35:11
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\config\dev.js
 */
const API_HOST = "'http://XXXXXXXXXXXXXXXX'";

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    'process.env.name': 'dev',
    'process.env.api': API_HOST,
  },
  mini: {},
  h5: {}
}
