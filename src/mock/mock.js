import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  userList
} from './data/userList'
import Store from 'storejs'

var mock = new MockAdapter(axios, { delayResponse: 500 })
// 登录接口
mock.onPost('/login').reply(config => {
  var reqdata = JSON.parse(config.data).data
  if (Store.get("userList")) {
    let userList1 = Store.get("userList")
    for (var i = 0; i < userList1.length; i++) {
      if (userList1[i].username === reqdata.uname) {
        if (userList1[i].password === reqdata.upwd) {
          return [200, {
            code: 1,
            data: userList1[i],
            msg: 'success'
          }]
        } else {
          return [200, {
            code: 2,
            msg: '密码错误'
          }]
        }
      }
    }
  }
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].username === reqdata.uname) {
      if (userList[i].password === reqdata.upwd) {
        return [200, {
          code: 1,
          data: userList[i],
          msg: 'success'
        }]
      } else {
        return [200, {
          code: 2,
          msg: '密码错误'
        }]
      }
    }
  }
  return [200, {
    code: 0,
    msg: '账号不存在'
  }]
})

// 注册接口
mock.onPost('/register').reply(config => {
  var reqdata = JSON.parse(config.data).data
  if(!reqdata.username){
    return [200, {
      code: -1,
      msg: '用户名不能为空!'
    }]
  }
  if(!reqdata.password){
    return [200, {
      code: -1,
      msg: '密码不能为空!'
    }]
  }
  if(!reqdata.sex){
    return [200, {
      code: -1,
      msg: '亲,请选择您的性别!'
    }]
  }
  if(!reqdata.name){
    return [200, {
      code: -1,
      msg: '兄弟,昵称最好还是加一个!'
    }]
  }
  // 假设当前注册用户名是ok的
  var con = true;
  for ( let i = 0;  i < userList.length; i++) {
    if (userList[i].username == reqdata.username) {
      con =false;
      return [200, {
        code: 0,
        msg: '用户名已存在'
      }]
    }
  }
  if(con){
    userList.push(reqdata)
    Store.set('userList', userList)
    return [200, {
      code: 1,
      msg: '注册成功'
    }]
  }
})

export default axios
// 注意暴露axios
