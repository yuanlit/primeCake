// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'lib-flexible/flexible.js'
import 'lib-flexible'

// 引入vuex数据仓库
import store from '@/core/store/index'

// 引入core.config
import coreConfig from '@/core/global/core.config'

// 此处引入需要样式的SCSS文件
import '@/common/css/index.scss'
// 引入图片懒加载
import VueLazyload from 'vue-lazyload'

// 引入动态title
Vue.use(require('vue-wechat-title'))

import 'font-awesome/css/font-awesome.css'
// import Mock from './mock/mock.js'
// Mock.mockInit()
// 给coreConfig传入Vue实例
Vue.use(coreConfig)

Vue.use(VueLazyload, {
  loading: require('@/assets/laz.jpg')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
