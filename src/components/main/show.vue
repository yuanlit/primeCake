<template>
  <div id="show">
    <a href="/pack/active">
      <div class="cake-fhsy">更多商品</div>
    </a>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img class="imgs" :src="item">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="name_box">
      <div class="status">新</div>
      <div class="name_info">{{goodsInfo.Name}}</div>
    </div>
    <!-- 信息页面 -->
    <!-- <div class="am-u-sm-12 clplr bgw mt4">
                <div class="cake-info-datum">
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-a">
                        <div class="cake-info-left qfc">甜度</div>
                        <div class="cake-info-right hfc">
                            <img alt="" ng-src="https://res.bestcake.com/m-images/ww/jz/tiandu_3.png" style="vertical-align: top; width: 22.4vw; margin-top: 0.6vw;" src="https://res.bestcake.com/m-images/ww/jz/tiandu_3.png">
                        </div>
                    </div>
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-b">
                        <div class="cake-info-left qfc">口味</div>
                        <div class="cake-info-right hfc ng-binding">醇香奶油</div>
                    </div>
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-c">
                        <div class="cake-info-left qfc">原材料</div>
                        <div class="cake-info-right hfc ng-binding">安佳淡奶油、进口白巧克力、新鲜草莓、进口蓝莓，</div>
                    </div>
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-d">
                        <div class="cake-info-left qfc">适合人群</div>
                        <div class="cake-info-right hfc ng-binding">所有人群</div>
                    </div>
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-e">
                        <div class="cake-info-left qfc">保鲜条件</div>
                        <div class="cake-info-right hfc">最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月30日建议3天内食用。</div>
                    </div>
                </div>
            </div> -->
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      bannerList: [],
      goodsInfo: []
    };
  },
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      // 初始化执行
      if (this.$route.query.c == "NS") {
        this.GetNSCakeByName(res => {
          // var goodsInfo = [];
          console.log(res)
          // res.data.Tag.forEach(ele => {
          //   if (ele.City == "苏州") {
          //     goodsInfo.push(ele);
          //   }
          // });
          // this.goodsInfo = goodsInfo[0];
          // console.log(this.goodsInfo);
        });
        this.setBannerList("ns-detail");
      } else if (this.$route.query.c.indexOf("KSK") != -1) {
        this.GetCakeByName(res => {
          console.log(res);
        });
        this.setBannerList("jd-detail");
      } else if (this.$route.query.c.indexOf("RP") != -1) {
        this.GetRuPCakeByName(res => {
          console.log(res);
          this.setBannerList("rp-detail");
        });
      }
    },
    
    setBannerList(path) {
      //  星光游乐园/星光游乐园-1.jpg
      for (var i = 0; i < 4; i++) {
        var str = `https://res.bestcake.com/m-images/${path}/${
          this.$route.query.key
        }/${this.$route.query.key}-${i + 1}.jpg`;
        this.bannerList.push(str);
      }
    },

    GetNSCakeByName(callback) {
      // 焦点图详情接口
      var data = {
        Name: this.$route.query.key
      };
      this.$apis.GetNSCakeByName(data).then(res => {
        callback(res);
      });
    },
    GetCakeByName(callback) {
      var data = {
        ProName: this.$route.query.key
      };
      // 商品详情接口
      this.$apis.GetCakeByName(data).then(res => {
        callback(res);
      });
    },
    GetRuPCakeByName(callback) {
      var data = {
        Name: this.$route.query.key
      };
      // 严选商品接口
      this.$apis.GetRuPCakeByName(data).then(res => {
        callback(res);
      });
    }
  }
};
</script>

<style scoped lang="scss">
#show {
  a {
    .cake-fhsy {
      width: r(200);
      height: r(80);
      position: fixed;
      z-index: 2;
      right: r(20);
      top: r(60);
      border: 1px solid #000;
      border-radius: 5%;
      font-size: r(40);
      line-height: r(80);
      text-align: center;
      color: #000;
    }
  }
  .swipe {
    width: 100%;
    height: r(427 * 2);
    .imgs {
      width: 100%;
      height: 100%;
    }
  }
}
.name_box {
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  padding-bottom: 10vw;

  .status {
    font-size: 4vw;
    line-height: 8vw;
    width: 8vw;
    height: 8vw;
    text-align: center;
    color: #fff;
    border-radius: 2px;
    background: #f2495e;
    margin-right: 1.33vw;
  }
  .name_info {
    line-height: 4.53vw;
    font-weight: bold;
    color: #333;
    font-size: 4.53vw;
    margin-top: 2vw;
    margin-bottom: 4vw;
    text-align: center;
  }
}
// 加下边框
.name_box {
  border-bottom: r(25) solid #f5f5f2;
}
</style>


