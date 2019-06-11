import request from './http'

// ------------------------------------mock
// var pox = '/apis'
// import axios from 'axios'
// import axios from '@/mock/mock'
// 直接引入没有配置的axios,如下,发送一个get请求到/success
// axios.get('/success').then((res) => {
//   console.log(res)
// })
// ------------------------------------mock
var url01 = '/json1811.ashx'
class Apis {
  // 轮播的接口
  GetBannerList (data) {
    return request({
      method: 'get',
      url: url01,
      params: data
    })
  }
  // 首页商品数据接口
  GetIndexCakeList () {
    return request({
      method: 'get',
      url: url01,
      params: {
        m: 'GetIndexCakeList',
        v: '1560219368002',
        c: 'Index'
      }
    })
  }
  //  焦点图详情接口
GetNSCakeByName(data) {
  return request({
    method: "get",
    url: url01,
    params: {
      Name: data.Name,
      c: "NsCakeCenter",
      m: "GetNSCakeByName",
      v: "1560225194548"
    }
  })
}
// 商品详情接口
GetCakeByName(data) {
return request({
  method: "get",
  url: url01,
  params: {
    City:"苏州" ,
    ProName:data.ProName,
    c: "Product",
    m: "GetCakeByName",
    v: "1560236137480"
  }
})
}
}

export default new Apis()
