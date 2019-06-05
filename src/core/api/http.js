import axios from 'axios'
// const URL ="https://bird.ioliu.com";
// "localhost:8899"
const baseURL = location.host.indexOf('.com') !== -1 ? '' : '/apis'

// console.log(baseURL)
// 区分
// 本地环境
// 例如:
// localhost  127.0.0.1 xxx.xxx.xxx
// 生产环境
// www.baidu.com
// url:baseURL+"/index"

let ajaxConfig = {
  baseURL,
  timeout: 20000,
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return data
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data
  }],
  withCredentials: true,
  responseType: 'json'
}

var instance = axios.create(ajaxConfig)

export default instance
