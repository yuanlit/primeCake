import Vue from 'vue'
import Vuex from 'vuex'
import Store from 'storejs'
// import apis from "@/core/api/index"
// console.log("OK");
Vue.use(Vuex)

// 定义属性值  data
const state = {
  // 用于给window.localstorege固定格式
  shopCart: [],
  N:'...',
  city: '苏州',
  cityList1: ['上海', '北京', '天津', '重庆'],
  cityList2: ['苏州', '无锡', '南京', '杭州', '宁波', '绍兴', '成都', '常州', '台州', '嘉兴']
}
// 定义同步方法
const mutations = {
  addCartList (state, data) {
    let obj = Store.get("data");
    let num = 0;
    console.log(obj)
    if (!obj) {
      state.shopCart.push(data)
      window.localStorage.setItem("data", JSON.stringify(state.shopCart));
      state.N = data.num;
      return;
    }
    var con = true;
    obj.forEach(ele => {
      if (ele.id == data.id) {
        ele.num += data.num
        con = false
        return
      }
    })
    if (con) {
      obj.push(data)
    }
    obj.forEach(ele => {
      num += ele.num;
    })
    state.N = num;
    Store.set("data",obj);
  },
  numSub (state, id) {
    let oData = JSON.parse(window.localStorage.getItem('data'));
    let num = 0;
    oData.forEach(ele => {
      if (ele.id == id) {
        ele.num--
        if (ele.num == 0) {
          ele.num = 1
        }
      }
      num += ele.num;
    })
    // 用于修改小图标的值
    state.N = num;
    window.localStorage.setItem("data", JSON.stringify(oData));
  },
  numAdd (state, id) {
    let oData = JSON.parse(window.localStorage.getItem('data'));
    let num = 0;
    oData.forEach(ele => {
      if (ele.id == id) {
        ele.num++
      }
      num += ele.num;
    })
    // 用于修改小图标的值
    state.N = num;
    window.localStorage.setItem("data", JSON.stringify(oData));
  },
  City_qaunju(state, item) {
    state.city = item
  }
}

//       ------------------------与你无瓜
// 定义 computed(属性计算)
const getters = {
  count(state) {
    // return state.num * state.price
  }
}

// 定义异步方法,可以在这个里面做一些异步操作,比如调用通用数据接口
const actions = {
  syFn(context) {
    // context.state  可以取 state 属性
    // context.commit  可以调用 mutations 同步方法 属性
    // context.dispatch可以调用 actions 异步方法 属性
    // 在组件里面调用 也是一样,同上面的方法一直
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
