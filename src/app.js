import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/center/index'

import counterStore from './store/counter'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/first/index',
      'pages/center/index',
      'pages/order/index',
      'pages/orderList/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/first/index',
          iconPath: 'assets/picture/icon1.png',
          selectedIconPath: 'assets/picture/icon0.png',
          text: '首页'
        },
        {
          pagePath: 'pages/order/index',
          iconPath: 'assets/picture/icon3.png',
          selectedIconPath: 'assets/picture/icon2.png',
          text: '点单'
        },
        {
          pagePath: 'pages/orderList/index',
          iconPath: 'assets/picture/icon5.png',
          selectedIconPath: 'assets/picture/icon4.png',
          text: '订单'
        },
        {
          pagePath: 'pages/center/index',
          iconPath: '',
          selectedIconPath: '',
          text: '我的'
        },
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
