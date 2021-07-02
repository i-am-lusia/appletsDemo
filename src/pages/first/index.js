import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Swiper,SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'


@inject('counterStore')
@observer
class First extends Component {

  imageList = [
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11570350483%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627787822&t=c031ad0a9c369bc7eaa20aaf8decbfe9',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11570350483%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627787822&t=c031ad0a9c369bc7eaa20aaf8decbfe9',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11570350483%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627787822&t=c031ad0a9c369bc7eaa20aaf8decbfe9'
  ]

  componentWillMount () {
    Taro.setNavigationBarColor({
      frontColor: '#DBDBDB',
      backgroundColor: '#DBDBDB',
      animation: {
          duration: 400,
          timingFunc: 'easeIn'
      }
  })
  }

  componentWillReact () {

  }

  componentDidMount () {
  }
  componentWillPreload(){

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }



  render () {
    return (
      <View className='index'>
        <View className='title'>
          <Image
            style='width: 100px;height: 81px;'
            src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp3.ssl.qhimgs3.com%2Ft01fd97b9faae06f149.png&refer=http%3A%2F%2Fp3.ssl.qhimgs3.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627786175&t=ac6a3e1465ff2c97b31c00312d844497'
          ></Image>
        </View>
        <ScrollView>
          {/** 轮播图 */}
          <Swiper
            className='picScroll'
            autoplay
            indicatorDots
          >
            {
              this.imageList.map((item,index)=>{
                return <SwiperItem key={index}>
                        <Image
                          className='pic'
                          src={item}
                        ></Image>
                  </SwiperItem>
              })
            }
          </Swiper>
          {/**  按钮区  */}
          <View></View>
          {/**
           *  工厂播报
           *  数组遍历view显示消息模块
           */}
        </ScrollView>
      </View>
    )
  }
}
/** 	#DBDBDB */
export default First
