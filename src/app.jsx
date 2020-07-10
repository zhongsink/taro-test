import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.less'

const store = {
  counterStore
}

const sleep = (time) => new Promise((resolve) => {
  setTimeout(() => {
    console.log('sleep')
    resolve()
  } , time)
}).finally(() => {
  console.log('sleep finally')
})

class App extends Component {
  componentDidMount () {}

  componentDidMount () {
    sleep(1000)
    console.log('done')
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
