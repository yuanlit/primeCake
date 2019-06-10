import tempFn from '@/components/tempCommon/tempCommon'
// import fliter from '@/core/fliter/index'
// import global from '@/core/global/global' // 返回了以个对象{getParam:fn()}
import apis from '@/core/api/index' // 返回了以个对象{joke:fn(),getServerStr:fn()}

export default (Vue) => {
  tempFn(Vue)
  Vue.prototype.$apis = apis
}
