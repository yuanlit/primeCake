// 通电概念
// 在js暴露函数
import layBtn from '@/components/main/appCom'
import { Swipe, SwipeItem, Progress } from 'mint-ui'

export default (Vue) => {
  // Vue.component('lay_test', {
  //   template: '<h1>我是全局组件</h1>'
  // })
  Vue.component('layBtn', layBtn)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(Progress.name, Progress)
}
