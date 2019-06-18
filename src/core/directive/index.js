export default (Vue) => {
  Vue.directive('getThis', (el) => {
    el.onclick = function () {
      alert('OK')
    }
  })
  // 点击上传图片
  Vue.directive('fileUpload', (el, binding, vnode, oldVnode) => {
    // 拿到组件传过来的参数
    var data = binding.value
    // 创建input file文件上床表单
    createNode(data)
    function createNode () {
      // 创建节点
      var node = document.createElement('input')
      node.type = 'file'
      // 限制上传类型
      node.accept = 'image/jpeg, image/png, image/jpg'
      // 设置是否可以传多张
      node.multiple = data.multiple ? 'multiple' : ''
      node.style.display = 'none'
      // 把当前file input 对象,放入指令节点中
      el.prepend(node)
      // 调用button下面input_file的onclick方法,自动弹出文件上传框
      el.onclick = function () {
        el.children[0].click()
      }
    }
    var inputFile = el.children[0]
    inputFile.onchange = function (e) {
      // 当用户上传了图片
      var e = event || window.event
      // 在事件对象下面去拿file文件对象
      var file = e.target.files[0]
      console.log(e)
      // 去调用当前组件里面函数
      var fn = data.fn   // fileUpload
      vnode.context[fn](window.URL.createObjectURL(file))
    }
  })
}
