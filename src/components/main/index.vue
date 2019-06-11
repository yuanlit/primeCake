<template>
  <div id="app01">
    <div id="city">
      <div class="city">苏州</div>
    </div>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
          <a :href="item.LinkUrl">
            <img :src="item.ImgUrl" class="top-banner-li-img">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 以上为轮播图 -->
    <div class="banner-icon">
      <!-- <div class="loading" style="display: none;">
        <label>加载中...</label>
      </div>-->
      <div class="icon-box" v-for="(item, index) in iconList" :key="index">
        <a :href="item.ProUrl">
          <div class="icon-img">
            <img :src="item.ImgUrl">
          </div>
        </a>
        <div class="icon-title">{{item.ActName}}</div>
      </div>
    </div>
    <!-- 广告区 -->
    <div class="guanggao">
      <div  class="guanggao_box" v-for="(item, index) in icoImgList01" :key="index">
        <a :href="item.proUrl">
          <img :src="item.ImgUrl">
        </a>
      </div>
      <div class="guanggao_box">
        <div v-for="(item, index) in icoImgList02" :key="index">
          <a :href="item.proUrl">
            <img :src="item.ImgUrl">
          </a>
      </div>
      </div>
    </div>
    <img src="https://res.bestcake.com/m-images-2/mofa.png" class="special">
    <div class="special-title">任选一款，走进你的心</div>
    <div class="mofa-tab">
      <div class="selected">送恋人</div>
      <div class>送挚友</div>
      <div class>送长者</div>
      <div class>送亲子</div>
    </div>
    <div class="mofa-list">
      <div class="mofa-cake">
        <img
          src="https://res.bestcake.com/m-images/CakeListConfig/697050411817742300.jpg"
          class="mofa-img"
        >
        <div class="mofa-name">许愿天使</div>
        <div class="mofa-price">
          <span style="color: rgb(255, 51, 0); font-size: 3.2vw;">￥</span>
          <span style="color: rgb(255, 51, 0); font-size: 4.267vw;">298</span>
          <span style="color: rgb(212, 212, 212); font-size: 3.2vw; margin-left: 1.067vw;">/ 2.2磅</span>
        </div>
      </div>
      <div class="mofa-cake">
        <img
          src="https://res.bestcake.com/m-images/CakeListConfig/284816958668199900.jpg"
          class="mofa-img"
        >
        <div class="mofa-name">露水茶颜</div>
        <div class="mofa-price">
          <span style="color: rgb(255, 51, 0); font-size: 3.2vw;">￥</span>
          <span style="color: rgb(255, 51, 0); font-size: 4.267vw;">218</span>
          <span style="color: rgb(212, 212, 212); font-size: 3.2vw; margin-left: 1.067vw;">/ 1.2磅</span>
        </div>
      </div>
      <div class="mofa-cake">
        <img
          src="https://res.bestcake.com/m-images/CakeListConfig/341579704018727000.jpg"
          class="mofa-img"
        >
        <div class="mofa-name">草莓拿破仑</div>
        <div class="mofa-price">
          <span style="color: rgb(255, 51, 0); font-size: 3.2vw;">￥</span>
          <span style="color: rgb(255, 51, 0); font-size: 4.267vw;">218</span>
          <span style="color: rgb(212, 212, 212); font-size: 3.2vw; margin-left: 1.067vw;">/ 1.2磅</span>
        </div>
      </div>
    </div>
    <img src="https://res.bestcake.com/m-images-2/pinzhi.png" class="special">
    <div class="special-title">没尝过这些美味的人生，是不完美的</div>
    <!-- tab栏 -->
  </div>
</template>

<script>
// mock--------------------------mock
// import axios from "@/mock/mock";
// axios.get("/GetIndexCakeList").then(res => {
//   // console.log(res);
// });
// mock--------------------------mock
export default {
  data() {
    return {
      // 轮播数据
      bannerList: [],
      // 8个ICO数据
      iconList: [],
      // 3张焦点图数据
      icoImgList01: [
        {
          name: "宠爱少女",
          key: "宠爱少女",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao1.png?v=0419",
          proUrl: "/ns/ns-cake-page?pname=宠爱少女"
        }
      ],
      icoImgList02: [
        {
          name: "小猪蛋糕-贝丽",
          key: "贝丽",
          ImgUrl: "https://res.bestcake.com/m-images-2/guangao22.png?v=0419",
          proUrl: "/ns/ns-cake-page?pname=星光游乐园"
        },
        {
          name: "星光游乐园",
          key: "星光游乐园",
          ImgUrl: "https://res.bestcake.com/m-images-2/guanggao3.png",
          proUrl: "/ns/ns-cake-page?pname=星光游乐园"
        }
      ]
    };
  },
  mounted() {
    // banner图的数据处理,并赋值给bannerList
    this.GetBannerList(res => {
      res.forEach(item => {
        item.ImgUrl = "https://res.bestcake.com/" + item.ImgUrl;
      });
      this.bannerList = res;
    });
    // 获取主页的数据
    this.GetIndexCakeList(res => {
      console.log(res);
      // 获取icon的数据
      var iconData = res.data.Tag.iconList.slice(0, 8);
      this.iconList = iconData;
      console.log(this.iconList);
    });
  },
  methods: {
    // 调取轮播接口
    GetBannerList(callback) {
      var data = {
        v: "1560219844410",
        c: "Index",
        m: "GetBannerList",
        Type: 2,
        City: "苏州"
      };
      this.$apis.GetBannerList(data).then(res => {
        callback(res.data.Tag.List);
      });
    },
    // 调用首页商品数据
    GetIndexCakeList(callback) {
      this.$apis.GetIndexCakeList().then(res => {
        callback(res);
      });
    }
  }
};
</script>

<style scoped lang='scss'>
#city {
  padding-left: r(15);
  text-align: center;
  line-height: r(50);
  background: rgba(255, 255, 255, 0.4);
  margin-top: r(20);
  width: r(128);
  height: r(50);
  position: absolute;
  z-index: 1000;
  background-image: url(https://res.bestcake.com/m-images-2/location.png);
  background-repeat: no-repeat;
  background-size: r(40), r(45);
  background-position: r(5) r(6);
  font-size: r(32);
  border-radius: 0 r(6) r(6) 0;
}

.banner {
  width: 100%;
  height: r(190 * 2);
}

.banner-icon {
  display: flex;
  flex-wrap: wrap;
  padding: r(20) r(20) r(30);
  border-bottom: r(25) solid #fafafa;

  .icon-box {
    width: 25%;

    a {
      div {
        text-align: center;

        img {
          width: r(132);
        }
      }
    }

    .icon-title {
      text-align: center;
      margin: -r(18) 0 r(18);
    }
  }
}

.top-banner-li-img {
  width: 100%;
  height: 100%;
}

.mint-swipe-indicator.is-active {
  height: 30px;
  width: 54px;
  background: red;
}

.guanggao {
  padding: r(20);
  display: flex;
  justify-content: space-between;
  border-bottom: r(25) solid #fafafa;
  .guanggao_box {
    width: 49%;
    a {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
}

// 魔法菜心
.special-title,
.special {
  width: 100%;
}

.special-title {
  height: r(39);
  width: 100%;
  text-align: center;
  color: #999;
  font-size: 3.2vw;
  margin-bottom: r(30);
}

.mofa-tab {
  display: flex;
  justify-content: space-around;
  height: r(59);
  z-index: 1002;

  div {
    width: r(120);
    height: r(59);
    line-height: r(50);
    text-align: center;
    background: url(https://res.bestcake.com/m-images-2/mofa-1.png) no-repeat
      center center;
    background-size: 100% 100%;
  }

  .selected {
    background-image: url(https://res.bestcake.com/m-images-2/mofa-2.png);
    color: #fff;
  }
}
</style>
