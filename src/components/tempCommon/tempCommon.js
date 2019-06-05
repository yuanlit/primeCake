// 通电概念
// 在js暴露函数
// import lay_btn from '@/components/main/appCom'
export default (Vue) => {
  Vue.component('lay_test', {
    template: '<h1>我是全局组件</h1>'
  })
  Vue.component('lay_test', lay_btn)
}
