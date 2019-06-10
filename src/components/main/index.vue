<template>
  <div id="app01">
    <div id="city">
      <div class="city">苏州</div>
    </div>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <a href="/act/2019-item-entrance">
            <img
              src="https://res.bestcake.com/m-images/banner_new/368311689846465800.jpg?v=2"
              class="top-banner-li-img"
            >
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="/act/2019-item-618?back=1">
            <img
              src="https://res.bestcake.com/m-images/CakeListConfig/749319704926346000.jpg"
              class="top-banner-li-img"
            >
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="/act/2019-item-icenew?back=1">
            <img
              src="https://res.bestcake.com/m-images/banner_new/721590660285692000.jpg"
              class="top-banner-li-img"
            >
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="/act/xibing/wedding-cake?back=1">
            <img
              src="https://res.bestcake.com/m-images/banner_new/535769203549675970.jpg"
              class="top-banner-li-img"
            >
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 以上為banner圖 -->
    <div class="banner-icon">
      <!-- <div class="loading" style="display: none;">
        <label>加载中...</label>
      </div>-->
      <div class="icon-box">
        <a href="/act/2019-item-618?back=1">
          <div class="icon-img">
            <img src="https://res.bestcake.com/m-images/banner_new/364607927039034560.jpg">
          </div>
        </a>
        <div class="icon-title">618钜献</div>
      </div>
      <div class="icon-box">
        <a href="/act/2019-item-entrance">
          <div class="icon-img">
            <img src="https://res.bestcake.com/m-images/banner_new/538207660850250200.jpg">
          </div>
        </a>
        <div class="icon-title">大礼包兑换</div>
      </div>
      <div class="icon-box">
        <a href="/n/list?filtername=jz">
          <div class="icon-img">
            <img src="https://res.bestcake.com/m-images/banner_new/339358287107534000.jpg">
          </div>
        </a>
        <div class="icon-title">贝思客优选</div>
      </div>
      <div class="icon-box">
        <a href="/n/list?filtername=jd">
          <div class="icon-img">
            <img src="https://res.bestcake.com/m-images/banner_new/12077535670548922.jpg">
          </div>
        </a>
        <div class="icon-title">订蛋糕</div>
      </div>
      <div class="icon-box">
        <a href="/card/index">
          <div class="icon-img">
            <img src="https://res.bestcake.com/m-images/banner_new/706848964689883300.jpg">
          </div>
        </a>
        <div class="icon-title">代金卡下单</div>
      </div>
      <div class="icon-box">
        <a href="/n/list?filtername=rp">
          <div class="icon-img">
            <img src="https://res.bestcake.com/m-images/banner_new/18052208933946324.jpg">
          </div>
        </a>
        <div class="icon-title">冰淇淋</div>
      </div>
      <div class="icon-box">
        <a href="http://m.bestcake.com/act/2019-item-vote?back=1">
          <div class="icon-img">
            <img src="https://res.bestcake.com/m-images/banner_new/988173501678991200.jpg">
          </div>
        </a>
        <div class="icon-title">问卷小调查</div>
      </div>
    </div>
    <!-- 广告区 -->
    <div class="guanggao">
      <div>
        <a href="/ns/ns-cake-page?pname=宠爱少女">
          <img src="https://res.bestcake.com/m-images-2/guanggao1.png?v=0419">
        </a>
      </div>
      <div>
        <a href="/ns/ns-cake-page?pname=贝丽">
          <img src="https://res.bestcake.com/m-images-2/guangao22.png?v=0419">
        </a>
        <a href="/ns/ns-cake-page?pname=星光游乐园">
          <img src="https://res.bestcake.com/m-images-2/guanggao3.png">
        </a>
      </div>
    </div>
    <img src="https://res.bestcake.com/m-images-2/mofa.png" class="special">

    <div class="special-title" style="margin-bottom: 4.26667vw;">
            任选一款，走进你的心
    </div>
  </div>
</template>

<script>
import axios from "@/mock/mock";
axios.get("/GetIndexCakeList").then(res => {
  console.log(res);
});
export default {
  mounted() {
    // var data01 = {
    //   v: '1560132853890',
    //   c: 'PhotoListCenter',
    //   m: 'GetPhotoLIst',
    //   Type: 2,
    //   AdvertisingType: 1
    // }
    // this.$apis.GetPhotoLIst(data01).then((res) => {
    //   console.log(res)
    //   this.msg = res.data
    // })
  }
};
</script>

<style scoped lang='scss'>
#app01 {

}
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
  height: r(380);
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
  div {
    width: 49%; 
    a {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
// 魔法菜心了
.special-title,.special {
  width: 100%;
}
.special-title {
  height: r(39);
  width: 100%;
  border: 1px solid red;
  text-align: center;
  color: #999;
  font-size: 3.2vw;
}

</style>
