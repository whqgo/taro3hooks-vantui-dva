/*
 * @Author: whq
 * @Date: 2022-07-27 17:22:49
 * @LastEditTime: 2022-07-28 09:47:19
 * @LastEditors: whq
 * @Description: 
 * @FilePath: \pure-project-vantui\src\app.tsx
 */
import { Component } from 'react'
import dva from './utils/dva'
import { Provider } from 'react-redux'
import models from './models'
import './app.less'
const dvaApp = dva.createApp({
  initialState: {},
  models
})
const store = dvaApp.getStore();
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
