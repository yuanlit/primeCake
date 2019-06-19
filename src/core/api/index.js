import request from './http'

// 引入全局参数
import params from './params'

var v_data = params.v // 拿到当前时间戳
import mock from '@/mock/mock'

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

  // icon接口
  GetIndexCakeList () {
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
  GetNSCakeByName (data) {
    return request({
      method: 'get',
      url: url01,
      params: {
        Name: data.Name,
        c: 'NsCakeCenter',
        m: 'GetNSCakeByName',
        v: v_data
      }
    })
  }

  // 魔发猜心以及部分品质甄选接口
  // KSK
  GetCakeByName (data) {
    return request({
      method: 'get',
      url: url01,
      params: {
        City: '苏州',
        ProName: data.ProName,
        c: 'Product',
        m: 'GetCakeByName',
        v: v_data
      }
    })
  }

  // JZ  严选接口
  GetjzCakeInfo (data) {
    return request({
      method: 'get',
      url: url01,
      params: {
        City: '苏州',
        ProName: data.Name,
        c: 'IndexCenter',
        m: 'GetjzCakeInfo',
        v: v_data
      }
    })
  }

  //
  GetRuPCakeByName (data) {
    return request({
      method: 'get',
      url: url01,
      params: {
        Name: data.Name,
        c: 'NsCakeCenter',
        m: 'GetRuPCakeByName',
        v: v_data
      }
    })
  }

  // 获取城市的接口
  GetPhotoLIst () {
    return request({
      method: 'get',
      url: url01,
      params: {
        c: 'PhotoListCenter',
        m: 'GetPhotoLIst',
        Type: 2,
        v: v_data,
        AdvertisingType: 1
      }
    })
  }

  // 分类页数据接口
  GetJdListNew () {
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

  login (data) {
    return mock.post('/login', {
      data
    })
  }

  register (data) {
    return mock.post('/register', {
      data
    })
  }
}

export default new Apis()
