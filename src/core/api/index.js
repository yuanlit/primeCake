import request from './http'
// var pox = '/apis'
import axios from '@/mock/mock'
// 直接引入没有配置的axios,如下,发送一个get请求到/success
axios.get('/success').then((res) => {
  console.log(res)
})
class Apis {
  joke (data) {
    return request({
      method: 'get',
      url: '/joke',
      params: data
    })
  }
  getServerStr () {
    return request({
      method: 'post',
      url: '/json.php',
      data: {
        uname: 'Msea',
        upwd: '1234565'
      }
    })
  }
}

export default new Apis()
