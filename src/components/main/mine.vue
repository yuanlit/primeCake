<template>
    <div>
        <div class="login" v-if="loginNum == 0">
          <div class="login_box">
            <form>
              <p>
                <label for="uname">用户名:&nbsp;</label>
                <input id="uname" type="text"/>
              </p>
              <p>
                <label for="upwd">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
                <input id="upwd" type="password"/>
              </p>
              <button type="submit" onclick="javaScript:;">登录</button>
              <button onclick="javaScript:;">注册</button>
            </form>
          </div>
        </div>
      <div>
        <button v-fileUpload ='setInputFile'>我是一个上传图片的按钮</button>
      </div>
      <img :src="url" alt="">
    </div>
</template>

<script>
import Store from 'storejs'
export default {
  data () {
    return {
      loginNum: 0,
      setInputFile: {
        'fn' : 'fileUpload',
        'multiple' : false// 设置能否多张上传
      },
      url:''
    }
  },
  methods: {
    // 回调获取上传图片地址
    fileUpload (url) {
      this.url = url
    },
    // 页面初始化
    pageInit () {
      if (!Store.get('userInfo')) {
        this.loginNum = 0
      } else {
        this.userInfo = Store.get('userInfo')
        this.loginNum = 1
      }
    },
    login () {
      console.log(this.uname, this.upwd)
      var data = {
        uname: this.uname,
        upwd: this.upwd
      }
      // console.log(data);
      this.$apis.login(data).then(res => {
        if (res.data.code === 0) {
          this.$router.push({
            path: '/edit'
          })
        } else if (res.data.code === 1) {
          this.loginNum = 1
          this.userInfo = res.data.data
          //  Store.set("userInfo",this.userInfo);
        } else {
          console.log(res.data.msg)
        }

      })
    }
  },
  mounted () {

  }
}
</script>
<style scoped lang='scss'>
  .login {
    .login_box {
      position:absolute;
      left:0;
      top: 0;
      z-index:9999;
      width:100%;
      height:100%;
      background:#02d4d7;
      display:flex;
      justify-content:center;
      align-items:center;
      form {
        text-align:center;
        p {
          margin: 3vw;
        }
        button {
          margin:4vw;
        }
      }
    }
  }
</style>
