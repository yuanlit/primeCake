import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {userList} from './data/userList'
import Store from 'storejs'

let mock = new MockAdapter(axios)

mock.onPost('/login').reply(config => {
  var reqdata = JSON.parse(config.data).data
  if(Store.get("userList")) {
    let userList1 = Store.get("userList")
    for (var i = 0; i < userList1.length; i++) {
      if (userList1[i].username === reqdata.uname) {
        if (userList1[i].password === reqdata.upwd) {
          return [200, {code: 1, data: userList1[i], msg: 'success'}]
        } else {
          return [200, {code: 2, msg: '密码错误'}]
        }
      }
    }
  }
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].username === reqdata.uname) {
      if (userList[i].password === reqdata.upwd) {
        return [200, {code: 1, data: userList[i], msg: 'success'}]
      } else {
        return [200, {code: 2, msg: '密码错误'}]
      }
    }
  }
  return [200, {code: 0, msg: '账号不存在'}]
})

mock.onPost('/register').reply(config => {
  var reqdata = JSON.parse(config.data).data
  userList.push(reqdata)
  Store.set('userList', userList)
  return [200, {code: 1, msg: '注册成功'}]
  // 做一个数据效验
})

export default axios
// 注意暴露axios
