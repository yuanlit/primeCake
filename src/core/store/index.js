import Vue from 'vue'
import Vuex from 'vuex'
// import apis from "@/core/api/index"
// console.log("OK");
Vue.use(Vuex)

// 定义属性值  data
const state = {
  name: '苹果',
  num: 0,
  price: 16
}
// 定义同步方法
const mutations = {
  add (state) {
    state.num++
  }
}
// 定义 computed(属性计算)
const getters = {
  count (state) {
    return state.num * state.price
  }
}

// 定义异步方法,可以在这个里面做一些异步操作,比如调用通用数据接口
const actions = {
  syFn (context) {
    // context.state  可以取 state 属性
    // context.commit  可以调用 mutations 同步方法 属性
    // context.dispatch可以调用 actions 异步方法 属性
    // 在组件里面调用 也是一样,同上面的方法一直
  },
  test (context, data) {
    console.log(data)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
