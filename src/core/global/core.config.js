import tempFn from '@/components/tempCommon/tempCommon'
// import fliter from '@/core/fliter/index'
import directive from '@/core/directive/index'
// 返回了以个对象{getParam:fn()}
import global from '@/core/global/global'

// 返回了以个对象{joke:fn(),getServerStr:fn()}
import apis from '@/core/api/index'

export default (Vue) => {
  // 全局组件
  tempFn(Vue)
  // fliter(Vue)
  directive(Vue)
  // 绑定到Vue原型里面直接可以在当前实例 this.$global上面调用
  Vue.prototype.$global = global
  Vue.prototype.$apis = apis
  // 全局通信
  // 使用 $on 注册事件
  // 使用 $emit 触发
  Vue.prototype.$eventHub = new Vue()
}
