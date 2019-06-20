<template>
  <div>
    <ul>
      <li>
        <div class="l">头像</div>
        <div class="r r_tou" v-fileUpload="setInputFile">
          <img :src="url" alt>
        </div>
      </li>
      <li>
        <div class="l">昵称</div>
        <div class="r">{{userInfo.name}}</div>
      </li>
      <li>
        <div class="l">登录账号</div>
        <div class="r">{{userInfo.username}}</div>
      </li>
      <li>
        <div class="l">性别</div>
        <div class="r">{{userInfo.sex}}</div>
      </li>
      <li class="change">
        <div class="l">修改密码</div>
        <div class="r">></div>
      </li>
    </ul>
    <div @click="quit" class="quit">退出登录</div>
  </div>
</template>

<script>
import Store from "storejs";
export default {
  data() {
    return {
      setInputFile: {
        fn: "fileUpload",
        multiple: false // 设置能否多张上传
      },
      url: "",
      userInfo: ""
    };
  },
  methods: {
    // 退出登录
    quit() {
      Store.clear();
      this.$router.push({
        path: "/index"
      });
    },
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
      console.log(this.userInfo);
    }
  },
  mounted() {
    this.pageInit();
  }
};
</script>

<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  ul {
    box-sizing: border-box;
    margin-left: 5vw;
    li {
      box-sizing: border-box;
      border-bottom: 1px solid rgb(211, 207, 207);
      padding: 4.3vw 0;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        width: 30vw;
        font-weight: 400;
        line-height: 1.6;
        color: #333;
        font-size: 4vw;
        line-height: 100%;
        text-align: center;
      }
      .l {
          text-align: left;
      }
      .r_tou {
        border: 1px solid #000;
        margin-right: 10vw;
        width: 13vw;
        height: 13vw;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .change {
      border-bottom: none;
    }
  }
}
.quit {
  width: 100%;
  padding: 5vw;
  text-align: center;
  color: #f2495e;
  margin-top: 3.867vw;
  margin-bottom: 3.867vw;
  font-size: 3.7334vw;
  line-height: 3.7334vw;
  border-top: 3vh solid rgb(247, 247, 247);
  border-bottom: 46vh solid rgb(247, 247, 247);
}
</style>

