import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import GetIndexCakeList from '@/mock/data/GetIndexCakeList.vue'
let mock = new MockAdapter(axios)

// 可以设置,延迟时间
mock = new MockAdapter(axios, {
  delayResponse: '500'
})

mock.onGet('/success').reply(config => {
  console.log('我进入了mock')
  return [200, {
    code: 200,
    msg: 'success'
  }]
})
mock.onGet('/GetIndexCakeList').reply(config => {
  console.log('我进入了mock')
  return [200, {
    code: 200,
    msg: GetIndexCakeList
  }]
})

export default axios
