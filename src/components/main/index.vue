<template>
  <div id="app01">
    <div :class="{'city-box':true,'rm':bool}">
      <div class="city-list">
        <div class="city-label1">
          <label>选择城市</label>
        </div>
        <div class="city-one1">
          <ul class="am-u-sm-12 clplr">
            <li class="am-u-sm-4 clplr" v-for="(item,index) in this.$store.state.cityList1" :key="index">
              <a href="javascript:void(0);" @click="inCity(item)">{{item}}</a>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="city-one2">
          <ul class="am-u-sm-12 clplr">
            <li class="am-u-sm-4 clplr"  v-for="(item,index) in this.$store.state.cityList2" :key="index">
              <a href="javascript:void(0);" @click="inCity(item)">{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="city">
      <div class="city" @click="xuan_city">{{this.$store.state.city}}</div>
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
      <div
        class="guanggao_box"
        v-for="(item, index) in icoImgList01"
        :key="index"
        @click="toShow(item)"
      >
        <img :src="item.ImgUrl">
      </div>
      <div class="guanggao_box">
        <div v-for="(item, index) in icoImgList02" :key="index" @click="toShow(item)">
          <img :src="item.ImgUrl">
        </div>
      </div>
    </div>
    <div class="mofa-box">
      <!-- 魔法猜心 -->
      <img src="https://res.bestcake.com/m-images-2/mofa.png" class="special">
      <div class="special-title">任选一款，走进你的心</div>
      <!-- 魔发猜心tab栏 -->
      <div class="mofa-tab">
        <div
          v-for="(item, index) in tabClass"
          :key="index"
          @click="setTab(index)"
          :class="{selected:tabActive==index}"
        >{{item}}</div>
      </div>
      <!-- 魔法猜心商品列表 -->
      <div class="mofa-list">
        <div
          class="mofa-cake"
          v-for="(item, index) in activeList"
          :key="index"
          @click="toShow(item)"
        >
          <img :src="item.ImgUrl" class="mofa-img">
          <div class="mofa-name">{{item.Name}}</div>
          <div class="mofa-price">
            <span>￥</span>
            <span>{{item.CurrentPrice}}</span>
            <i>/ {{item.Size}}</i>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------品质甄选--------------------- -->
    <img src="https://res.bestcake.com/m-images-2/pinzhi.png" class="special">
    <div class="special-title">没尝过这些美味的人生，是不完美的</div>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~ 品质甄选商品列表 ~~~~~~~~~~~~-->
    <div class="pinzhi-box">
      <div
        class="pinzhi-list"
        v-for="(item, index) in goodsList"
        :key="index"
        @click="toShow(item)"
      >
        <div class="pinzhi-img">
          <img v-lazy="item.ImgUrl">
        </div>
        <div class="pinzhi-detail">
          <div class="pinzhi-name">{{item.Name}}</div>
          <div class="pinzhi-info">{{item.MoreUrl}}</div>
          <div class="pinzhi-tip">
            <img src="https://res.bestcake.com/m-images-2/icon_zy.png">
          </div>
          <div class="pinzhi-price">
            <div>
              <label style="font-weight: inherit;">
                <span style="color: rgb(255, 51, 0); font-size: 3.2vw;">￥</span>
                <span style="color: rgb(255, 51, 0); font-size: 4.267vw;">{{item.CurrentPrice}}</span>
                <span style="color: rgb(255, 51, 0); font-size: 3.2vw;">.00</span>
              </label>
              <span
                style="color: rgb(212, 212, 212); font-size: 3.2vw; margin-left: 1.067vw;"
              >/ {{item.Size}}</span>
            </div>
          </div>
        </div>
        <div id="shopCart" class="pinzhi-cart">
          <img src="https://res.bestcake.com/m-images-2/pinzhi-cart.png">
        </div>
      </div>
    </div>
    <div class="jg-gonggao">
      <div class="jg-gonggao1">
        <div class="jg-text-z">划线价格</div>
        <div class="jg-text-y">商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</div>
      </div>
      <div class="jg-gonggao1">
        <div class="jg-text-z">未划线价格</div>
        <div class="jg-text-y">商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
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
      ],
      // 魔法猜心tab栏
      tabClass: ["送恋人", "送挚友", "送长者", "送亲子"],
      tabList: [],
      activeList: [],
      tabActive: 0,
      goodsList: [],
      cityList1: [],
      cityList2: [],
      bool:false,
    };
  },
  mounted() {
    // Indicator.open();
    this.pageInit();
  },
  methods: {
    pageInit () {
    // banner图的数据处理,并赋值给bannerList
    this.GetBannerList(res => {
      this.bannerList = [];
      res.forEach(item => {
        item.ImgUrl = "https://res.bestcake.com/" + item.ImgUrl;
      });
      this.bannerList = res;
    });
    // 获取主页的数据
    this.GetIndexCakeList(res => {
      // 获取icon的数据
      this.tabList = [];
      this.goodsList = [];
      this.iconList=[];
      res.data.Tag.iconList.forEach(ele => {
        if(ele.City.indexOf(this.$store.state.city) != -1){
         this.iconList.push(ele)
        }
      })
      res.data.Tag.list.forEach(item => {
        if (item.TabType == 4) {
          // 获取tab栏数据
          this.tabList.push(item);
        } else {
          // 获取品质甄选数据
          this.goodsList.push(item);
        }
      });
      // console.log(this.goodsList);
      // 初始化的时候,选定第一组数据
      this.setTab(0);
      
    });
    },
    xuan_city(){
      this.bool = false;
    },
    // vuex城市参数配置
    inCity(item){
      this.$store.state.city = item;
      this.pageInit();
      Indicator.close();
      this.bool = true;
    },
    toShow(item) {
      //图片焦点图跳转详情页
      var data = {
        key: item.key || item.Name,
        c: item.SupplyNo || "NS"
      };
      console.log(data);
      this.$router.push({
        path: "/show",
        query: data
      });
    },
    setTab(index) {
      // console.log(key);
      // this.tabActive=index;
      // console.log();
      var activeList = [];
      // console.log(this.tabClass[index])
      this.tabList.forEach(item => {
        // console.log(item.ActiveName)
        if (this.tabClass[index] == item.ActiveName) {
          activeList.push(item);
        }
      });
      this.activeList = activeList.slice(0, 3);
      // console.log(this.activeList);
      this.tabActive = index;
      // console.log(this.tabActive);
    },
    // =----------------------------以下为调取接口---------------------------
    // 调取轮播接口
    GetBannerList(callback) {
      var data = {
        v: new Date().getTime(),
        c: 'Index',
        m: 'GetBannerList',
        Type: 2,
        City: this.$store.state.city,
      }
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
.city-box {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1005;
  display: flex;
  justify-content: center;
  align-items: center;
  .city-list {
    background: rgb(255, 255, 255);
    position: fixed;
    width: 77.33vw;
    left: 11.47vw;
    top: 8.84vh;
    z-index: 999999;
    padding-bottom: 1.79vh;
    .city-label1 {
      width: 100%;
      padding-top: 2.39vh;
      margin-bottom: 4.4vh;
      text-align: center;
      display: block;
      label {
        display: inline-block;
        height: 4.5vh;
        font-weight: bold;
        line-height: 3.37vh;
        font-size: 4.26vw;
        width: 28vw;
        text-align: center;
        border-bottom: 0.38vw solid rgb(51, 51, 51);
      }
    }
    .city-one1,
    .city-one2 {
      ul {
        li {
          display: block;
          float: left;
          height: 9vh;
          text-align: center;
          a {
            width: 25.66vw;
            color: #333;
            font-size: 3.73vw;
            line-height: 9vh;;
            display: block;
          }
        }
      }
    }
    .clear {
      float: left;
      display: block;
      width: 100%;
      height: 1px;
    }
  }
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
.rm {
  display: none;
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

    img {
      width: 100%;
    }
  }
}

// 魔法菜心
.special {
  padding-top: 5vw;
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

.mofa-box {
  .mofa-tab {
    display: flex;
    justify-content: space-around;
    height: r(64);
    z-index: 2;

    div {
      width: r(143);
      height: r(60);
      line-height: r(50);
      text-align: center;
      background: url(https://res.bestcake.com/m-images-2/mofa-1.png) no-repeat
        center center;
      background-size: 90% 95%;
    }

    .selected {
      background-image: url(https://res.bestcake.com/m-images-2/mofa-2.png);
      color: #fff;
    }
  }

  .mofa-list {
    width: 100%;
    display: flex;
    border-bottom: r(30) solid #fafafa;
    padding-bottom: r(32);

    .mofa-cake {
      flex: 1;
      text-align: center;

      img {
        width: 80%;
        height: r(180);
      }

      .mofa-name {
        color: #333;
        font-size: r(18);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .mofa-price {
        span {
          color: rgb(255, 51, 0);
          font-size: 4.267vw;
        }

        i {
          font-style: normal;
          color: rgb(212, 212, 212);
          font-size: 3.2vw;
          margin-left: 1.067vw;
        }
      }
    }
  }
}

.pinzhi-box {
  width: 100%;
  box-sizing: border-box;
  .pinzhi-list {
    box-sizing: border-box;
    width: 100%;
    height: 29.333vw;
    margin-bottom: 3.2vw;
    position: relative;
    padding: 0 4vw;
    .pinzhi-detail {
      float: left;
      margin-left: 4vw;
      padding-top: 7vw;
      div {
        max-width: 50vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .pinzhi-info {
          font-size: 3.2vw;
          color: #999;
          margin-bottom: 1.067vw;
        }
      }
      .pinzhi-tip {
        height: 4.8vw;
        font-size: 0;
        img {
          height: 4.8vw;
          margin-right: 0.4vw;
        }
      }
    }
    .pinzhi-img {
      width: 29.333vw;
      height: 29.333vw;
      float: left;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .pinzhi-cart {
      width: 11.2vw;
      height: 11.2vw;
      position: absolute;
      right: 8vw;
      bottom: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.jg-gonggao {
  padding: 2vw 0;
  padding-top: 8vw;
  padding-right: 0px;
  padding-bottom: 40vw;
  padding-left: 0px;
  height: auto;
  .jg-gonggao1 {
    margin: 0 4vw;
    font-size: 3.734vw;
    margin-bottom: 21vw;
    .jg-text-z {
      float: left;
      width: 27vw;
      color: #181818;
    }
    .jg-text-y {
      float: left;
      width: 65vw;
      color: #a2a2a2;
    }
  }
}
.doc-icon-custom-2 .right {
  float: left;
  line-height: 6.5vw;
  font-size: 3.73vw;
}
.am-img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
.doc-icon-custom-2 .left {
  float: left;
  width: 12%;
  margin-right: 2.66vw;
}
</style>
