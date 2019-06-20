<template>
  <div>
    <div class="login" v-if="loginNum == 0">
      <div class="login_box">
        <div class="goBack" @click="goBack"> <<span>点击返回</span></div>
        <h1>欢迎登录，bestcake!</h1>
        <form>
          <p>
            <label for="uname">用户名:&nbsp;</label>
            <input id="uname" type="text" v-model="uname">
          </p>
          <p>
            <label for="upwd">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
            <input id="upwd" type="password" v-model="upwd">
          </p>
          <button type="submit" onclick="return false" @click="login()">登录</button>
          <button onclick="return false" @click="register()">注册</button>
        </form>
      </div>
    </div>
    <div class="pic_box">
      <!--  v-fileUpload="setInputFile" -->
      <div class="pic" @click="setInfo">
        查看资料
        <img :src="url" alt>
      </div>
      <div class="uname">{{userInfo.username}}</div>
    </div>
    <div class="icon_box">
      <div class="icon">
        <div class="hui">会员等级</div>
        <div class="hei">V0</div>
      </div>
      <div class="icon">
        <div class="hui">吉致币</div>
        <div class="hei">0</div>
      </div>
      <div class="icon">
        <div class="hui">优惠卷</div>
        <div class="hei">0</div>
      </div>
      <div class="icon">
        <div class="hui">兑换券</div>
        <div class="hei">0</div>
      </div>
    </div>
    <div class="am-u-sm-12 clplr person-dd">
      <div class="person-dd-1" onclick="window.location='/ww/my-order.html'">
        <div class="person-dd-2">
          <img src="https://res.bestcake.com\m-images\order\mw-person-dd.png">
        </div>
        <div class="person-dd-3">我的订单</div>
        <div class="person-dd-4 person-dd-5" style>
          <img src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg">
        </div>
      </div>
      <div class="personclear"></div>
      <div class="person-dd-1" onclick="window.location='/ww/Receipt-address.html'">
        <div class="person-dd-2">
          <img src="https://res.bestcake.com\m-images\order\mw_firm_ad.jpg">
        </div>
        <div class="person-dd-3">收货地址</div>
        <div class="person-dd-4 person-dd-5" style>
          <img src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg">
        </div>
      </div>
    </div>
    <div class="footer">
      <p>客服热线：400-627-5757</p>
      <p>服务协议与证照信息</p>
    </div>
  </div>
</template>

<script>
import Store from "storejs";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userInfo: "",
      loginNum: "",
      uname: "",
      upwd: "",
      url: ""
    };
  },
  methods: {
    // 回调获取上传图片地址
    fileUpload(url) {
      this.userInfo = Store.get("userInfo");
      this.userInfo.pic = url;
      Store.set("userInfo", this.userInfo);
      this.url = Store.get("userInfo").pic;
    },
    // 页面初始化
    pageInit() {
      if (!Store.get("userInfo")) {
        this.loginNum = 0;
      } else {
        if (Store.get("userInfo").pic) {
          this.url = Store.get("userInfo").pic;
        }
        this.userInfo = Store.get("userInfo");
        this.loginNum = 1;
      }
    },
    register() {
      this.$router.push({
        path: "/register"
      });
    },
    login() {
      var data = {
        uname: this.uname,
        upwd: this.upwd
      };
      this.$apis.login(data).then(res => {
        if (res.data.code === 0) {
          Toast({
            message: "用户名或密码错误!",
            position: "bottom",
            duration: 1000
          });
        } else if (res.data.code === 1) {
          this.loginNum = 1;
          this.userInfo = res.data.data;
          Store.set("userInfo", this.userInfo);
        } else {
          console.log(res.data.msg);
        }
      });
    },
    setInfo () {
      this.$router.push({
        path:'/userInfo'
      })
    },
    goBack () {
      this.$router.push({
        path : '/index'
      })
    }
  },
  beforeCreate() {},
  mounted() {
    this.pageInit();
  }
};
</script>
<style scoped lang='scss'>
.goBack {
  position: absolute;
  left: 20px;
  top: 20px;
  font-weight: bolder;
  font-size: 8vw;
  color: white;
  text-align: center;
    span {
      margin-left: 3vw;
      color: rgb(71, 40, 40);
      font-size: 5vw;
    }
}
body,
html {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.icon_box {
  padding-top: 8.66vw;
  background: #fff;
  padding-bottom: 4vw;
  display: flex;
  border-bottom: 3vh solid rgb(247, 247, 247);
  div {
    flex: 1;
    height: 50%;
    text-align: center;
    .hui {
      line-height: 4vw;
      font-size: 2.93vw;
      color: #ccc;
    }
    .hei {
      padding-top: 1.73vw;
      line-height: 5.73vw;
      font-size: 4.8vw;
      color: #333;
    }
  }
}
.footer {
  margin-top: 7.3vh;
  border-top: 10vh solid rgb(247, 247, 247);
  border-bottom: 13vh solid rgb(247, 247, 247);
  background: rgb(247, 247, 247);
  p {
    text-align: center;
    margin: 3vh;
    color: #999;
    font-size: 2.93vw;
  }
}
.pic_box {
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5vw 0;
  box-sizing: border-box;
  .pic {
    box-sizing: border-box;
    width: 30vw;
    height: 30vw;
    border: 1px solid rgb(247, 247, 247);
    overflow: hidden;
    border-radius: 50%;
    line-height: 30vw;
    text-align: center;
    position: relative;
    font-size: 4vw;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .uname {
    width: 40vw;
    height: 10vw;
    text-align: center;
    line-height: 10vw;
    font-size: 7vw;
  }
}
h1 {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 30vh;
}
// 动画
@keyframes myfirst {
  0% {
    background: white;
    left: 100vw;
    top: 0;
  }
  100% {
    left: 0;
    top: 0;
    background: -webkit-linear-gradient(
      -90deg,
      rgba(54, 209, 220, 1),
      rgba(9, 152, 154, 1)
    );
  }
}

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
.person-dd {
  margin-top: 4vw;
  background: #fff;
  box-sizing: border-box;
  width: 100%;
}
.person-dd-1 div {
  float: left;
}
.person-dd-2 {
  padding-left: 4vw;
  padding-top: 3.38vw;
  padding-bottom: 4vw;
}
.person-dd-2 img {
  width: 4vw;
}
.person-dd-3 {
  padding-left: 2.66vw;
  /* padding-right: 68.66vw; */
  padding-top: 3.86vw;
  padding-bottom: 3.86vw;
}
.person-dd-1 .person-dd-5 {
  float: right;
  margin-right: 4vw;
}
.personclear {
  clear: both;
  display: block;
}
</style>
