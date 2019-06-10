import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义属性值data
const state = {
  test: {
    name: 'yuanlit'
  }
}
// 定义同步方法部分
const mutations = {
  add () {

  }
}

// 定义compute
const getters = {

}

// 定义异步方法
const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
