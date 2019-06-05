import request from './http'
// var pox = '/apis'

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
