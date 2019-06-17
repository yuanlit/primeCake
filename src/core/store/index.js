import Vue from 'vue'
import Vuex from 'vuex'
// import apis from "@/core/api/index"
// console.log("OK");
Vue.use(Vuex)

// 定义属性值  data
const state = {
  // 用于给window.localstorege固定格式
  shopCart: {
    'N': 0,
    'list': []
  },
  N:'...',
  city: '苏州',
  cityList1: ['上海', '北京', '天津', '重庆'],
  cityList2: ['苏州', '无锡', '南京', '杭州', '宁波', '绍兴', '成都', '常州', '台州', '嘉兴']
}
// 定义同步方法
const mutations = {
  addCartList (state, data) {
    let jsonData = window.localStorage.getItem('data');
    if (!jsonData) {
      state.shopCart.list.push(data)
      state.shopCart.N += data.num;
      window.localStorage.setItem("data", JSON.stringify(state.shopCart));
      return;
    }
    let oData = JSON.parse(jsonData);
    var con = true;
    oData.list.forEach(ele => {
      if (ele.id == data.id) {
        ele.num += data.num
        con = false
        return
      }
    })
    if (con) {
      oData.list.push(data)
    }
    oData.N += data.num
    window.localStorage.setItem("data", JSON.stringify(oData));
    state.N = oData.N;
    console.log(JSON.parse(window.localStorage.getItem('data')))
  },
  numSub (state, id) {
    let oData = JSON.parse(window.localStorage.getItem('data'));
    oData.N = 0;
    oData.list.forEach(ele => {
      if (ele.id == id) {
        ele.num--
        if (ele.num == 0) {
          ele.num = 1
        }
      }
      oData.N += ele.num;
    })
    // 用于修改小图标的值
    state.N = oData.N;
    window.localStorage.setItem("data", JSON.stringify(oData));
  },
  numAdd (state, id) {
    let oData = JSON.parse(window.localStorage.getItem('data'));
    oData.N = 0;
    oData.list.forEach(ele => {
      if (ele.id == id) {
        ele.num++
      }
      oData.N += ele.num;
    })
    // 用于修改小图标的值
    state.N = oData.N;
    window.localStorage.setItem("data", JSON.stringify(oData));
  },
  // sub (state, data) {
  //   state.shopCart.list.forEach(ele => {
  //     if (ele.id == data) {
  //       ele.num++
  //     }
  //   })
  // },
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
