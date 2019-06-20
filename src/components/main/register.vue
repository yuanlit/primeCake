<template>
  <div>
    <div class="login">
      <div class="login_box">
        <h1>欢迎来到，bestcake!</h1>
        <form>
          <p>
            <label for="uname">用户名:&nbsp;</label>
            <input id="uname" type="text" v-model="uname">
          </p>
          <p>
            <label for="upwd">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
            <input id="upwd" type="password" v-model="upwd">
          </p>
          <p>
            性&nbsp;&nbsp;&nbsp;&nbsp;别:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>男</label>
            <input type="radio" name="sex" v-model="checked" value="男">
            <label>女</label>
            <input type="radio" name="sex" v-model="checked" value="女">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p>
            <label for="name">昵&nbsp;&nbsp;&nbsp;&nbsp;称:</label>
            <input id="name" type="text" v-model="name">
          </p>
          <button onclick="return false" @click="register()">注册</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from "mint-ui";
export default {
  data() {
    return {
      userInfo: "",
      uname: "",
      upwd: "",
      usex: "",
      name: "",
      sex: "",
      checked:""
    };
  },
  methods: {
    setSex (e) {
      console.log(e.target.checked)
    },
    register(e) {
      var data = {
        id: Math.random() * 10000,
        username: this.uname,
        password: this.upwd,
        sex: this.checked,
        avatar: "https://avatars0.githubusercontent.com/u/22588905?v=4&s=120",
        name: this.name
      };
      console.log(data)
      this.$apis.register(data).then(res => {
        if (res.data.code === 0) {
          Toast({
            message: "用户名或密码错误!",
            position: "bottom",
            duration: 1000
          });
        } else if (res.data.code === 1) {
          console.log("成功")
          MessageBox.confirm("注册成功!,是否立即登录?").then(action => {
            this.$router.push({
              path: "/mine",
              // query: data
            });
          });
        } else {
          console.log(res.data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  overflow: hidden;
  height: 100vh;
  .login_box {
    animation: myfirst 1s;
    position: fixed;
    z-index: 4;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: -webkit-linear-gradient(
      -90deg,
      rgba(54, 209, 220, 1),
      rgba(9, 152, 154, 1)
    );
    form {
      text-align: center;
      p {
        margin: 3vw;
      }

      button {
        margin: 4vw;
      }
    }
  }
}
h1 {
  margin: 0;
  padding: 0;
  color: #a8208b;
  position: absolute;
  top: 25vh;
}
</style>


