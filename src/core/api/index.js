import request from './http'

// 引入全局参数
import params from './params';
var v_data = params.v; //拿到当前时间戳
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
  GetBannerList() {
    return request({
      method: 'get',
      url: url01,
      params: {
        v: v_data,
        c: "Index",
        m: "GetBannerList",
        Type: 2,
        City: "苏州"
      }
    })
  }
  // 首页商品数据接口
  GetIndexCakeList() {
    return request({
      method: 'get',
      url: url01,
      params: {
        m: 'GetIndexCakeList',
        v: v_data,
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
        v: v_data
      }
    })
  }
  // 商品详情接口
  GetCakeByName(data) {
    return request({
      method: "get",
      url: url01,
      params: {
        City: "嘉兴",
        ProName: data.ProName,
        c: "Product",
        m: "GetCakeByName",
        v: v_data
      }
    })
  }
  // 获取城市的接口
  GetPhotoLIst() {
    return request({
      method: "get",
      url: url01,
      params: {
        c: "PhotoListCenter",
        m: "GetPhotoLIst",
        Type: 2,
        v: v_data,
        AdvertisingType: 1
      }
    })
  }
  // 分类页数据接口
  GetJdListNew() {
    return request({
      method: 'get',
      url: url01,
      params: {
        m: 'GetJdListNew',
        v: v_data,
        c: 'NsCakeCenter'
      }
    })
  }
}

export default new Apis()
