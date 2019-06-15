<template>
  <div id="show">
    <a href="/pack/active">
      <div class="cake-fhsy">更多商品</div>
    </a>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :class="['imgs',{active:active == index}]" :src="item" @click="active(index)">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="name_box">
      <div class="status">新</div>
      <div class="name_info">{{goodsInfo.Name}}</div>
    </div>
    <!-- 信息页面 -->
    <div class="jg-box">
      <div class="jg-gonggao">
        <div class="jg-gonggao1">
          <div class="jg-text-z">甜度</div>
          <div class="jg-text-y">
            <img
              alt
              ng-src="https://res.bestcake.com/m-images/ww/jz/tiandu_3.png"
              style="vertical-align: top; width: 22.4vw; margin-top: 0.6vw;"
              src="https://res.bestcake.com/m-images/ww/jz/tiandu_3.png"
            >
          </div>
        </div>
        <div class="jg-gonggao1">
          <div class="jg-text-z">口味</div>
          <div class="jg-text-y">{{goodsInfo.CategoryName}}</div>
        </div>
        <div class="jg-gonggao1">
          <div class="jg-text-z">原材料</div>
          <div class="jg-text-y">{{goodsInfo.Resource}}</div>
        </div>
        <div class="jg-gonggao1">
          <div class="jg-text-z">适合人群</div>
          <div class="jg-text-y" v-if="isLoad" v-text="goodsInfo.details_tips">-</div>
        </div>
        <div class="jg-gonggao1">
          <div class="jg-text-z">保鲜条件</div>
          <div class="jg-text-y">最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月30日建议3天内食用。</div>
        </div>
      </div>
    </div>
    <!-- 客户评论 -->
    <div class="comment">
      <span class="left">
        <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-a.png" class="comment_ico">
        <span>商品评论</span>
      </span>
      <span class="right">
        <span>(4条)</span>
        <span>
          <img
            src="https://res.bestcake.com/m-images/ww/detail/evaluate-b.png"
            class="am-img-responsive"
          >
        </span>
      </span>
    </div>
    <div v-if="isLoad" class="bang">
      <span
        :class="{active:activeInd == index}"
        @click="active(item,index)"
        v-for="(item, index) in Bang"
        :key="index"
      >{{item.Size||item}}</span>
    </div>
    <div class="cake_info" v-if="isLoad">
      <div class="cake_info_t">
        <span>
          <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png?v=112">
          <i>{{goodsInfo.configsize}}</i>
        </span>
        <span>
          <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png?v=112">
          <i>{{goodsInfo.configpeople}}</i>
        </span>
      </div>
      <div class="cake_info_b">
        <span>
          <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png?v=112">
          <i>{{goodsInfo.configware}}</i>
        </span>
        <span>
          <img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png?v=112">
          <i>{{goodsInfo.configtips}}</i>
        </span>
      </div>
    </div>
    <div class="jj_box">
      <div class="jj_l">购买数量</div>
      <div class="jj_r">
        <span class="add" @click="add(num)">+</span>
        <span class="num">{{num}}</span>
        <span class="sub" @click="sub">-</span>
      </div>
    </div>
    <!-- // 最后 -->
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
    <div class="footer">
      <div class="left">
        <span>
          已优惠:
          <i>0.00</i>
        </span>
        <span class="price">{{goodsInfo.CurrentPrice*this.num}}</span>
      </div>
      <div class="center" @click="add_carList">加入购物车</div>
      <div class="right">立即购买</div>
    </div>
  </div>
</template>
<script>
import { Indicator } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      bannerList: [],
      goodsInfo: [],
      isLoad: false,
      activeInd: 0, // 选择磅值
      sizeList: [],
      Bang: [],
      num: 1,
      sizeList_cart: []
    };
  },
  mounted() {
    // Indicator.open();
    this.pageInit();
  },
  methods: {
    add_carList() {    // 加购,拿到数据
      if (this.sizeList.length) {
        this.izeList_cart = this.sizeList;
      } else {
        this.izeList_cart = this.sizeList.infos.CakeType;
      }
      let data = {
        id:
          this.izeList_cart[this.activeInd].ID ||
          this.izeList_cart[this.activeInd].Id, //产品ID
        Name: this.goodsInfo.Name, //产品详情图片拼接,//贝利
        CurrentPrice: this.izeList_cart[this.activeInd].CurrentPrice, //产品价格
        Size: this.izeList_cart[this.activeInd].Size, //产品规格
        url: this.bannerList[0], //产品购物车显示图片
        SupplyNo: this.izeList_cart[this.activeInd].SupplyNo, //产品货号类型
        num: this.num  // 购买的数量
      };
      this.$store.commit("add",data);
      console.log(this.$store.state.shopCart.list)
    },
    // 购物数量加减逻辑
    add(num) {
      this.num++;
    },
    sub() {
      this.num--;
      this.num = this.num <= 1 ? 1 : this.num;
    },
    // 点击切换磅值  数量初始化
    active(item, index) {
      this.num = 1;
      this.activeInd = index;
      this.goodsInfo.CurrentPrice = item.CurrentPrice;
      this.goodsInfo.configware = item.PackingList || this.goodsInfo.configware;
    },
    pageInit() {
      // 初始化执行
      if (this.$route.query.c.indexOf("NS") != -1) {
        this.GetNSCakeByName(res => {
          this.sizeList = res.data.Tag;
          //  __________________________________________________
          var goodsInfo = [];
          res.data.Tag.forEach(ele => {
            if (ele.City == this.$store.state.city) {
              this.Bang = [ele.Size];
              goodsInfo.push(ele);
            }
          });
          // 将JSON数据处理成数组
          goodsInfo[0].Details = JSON.parse(goodsInfo[0].Details) || [];
          goodsInfo[0].ProductConfig = JSON.parse(goodsInfo[0].ProductConfig);
          // ----------------------------------------------------------------------

          // 合适吃的人群的数据
          goodsInfo[0].details_tips = goodsInfo[0].Details.details_tips;
          // 大小(磅)的数据
          goodsInfo[0].configsize = goodsInfo[0].ProductConfig.pc.configsize;
          // 适合多少人分享的数据
          goodsInfo[0].configpeople =
            goodsInfo[0].ProductConfig.pc.configpeople;
          // 餐具的数据
          goodsInfo[0].configware = goodsInfo[0].ProductConfig.pc.configware;
          // 预定时间的数据
          goodsInfo[0].configtips = goodsInfo[0].ProductConfig.pc.configtips;
          this.goodsInfo = goodsInfo[0];
        });
        this.setBannerList("ns-detail");
        this.isLoad = true;
      } else if (this.$route.query.c.indexOf("KSK") != -1) {
        this.setBannerList("jd-detail");
        this.GetCakeByName(res => {
          this.sizeList = res.data.Tag;
          this.Bang = this.sizeList.infos.CakeType;
          //  __________________________________________________
          let data = res.data.Tag.infos;
          this.goodsInfo = data;
          this.goodsInfo.Resource = data.Resourse;
          this.goodsInfo.details_tips = "所有人群";
          this.goodsInfo.Size = data.CakeType[0].Size;
          this.goodsInfo.configsize = "直径13.66cm";
          this.goodsInfo.configpeople = "适合4到5人食用";
          this.goodsInfo.configware = data.CakeType[0].PackingList;
          this.goodsInfo.configtips = data.Attention;
          this.goodsInfo.CurrentPrice = data.CakeType[0].CurrentPrice;
          this.isLoad = true;
        });
      } else if (this.$route.query.c.indexOf("RP") != -1) {
        this.GetRuPCakeByName(res => {
          // console.log(res);
          this.sizeList = res.data.Tag;
          //  __________________________________________________
          let data = res.data.Tag[0];
          this.goodsInfo = data;
          this.goodsInfo.details_tips = "-";
          this.setBannerList("rp-detail");
        });
      } else if (this.$route.query.c.indexOf("JZ") != -1) {
        this.GetjzCakeInfo(res => {
          this.sizeList = res.data.Tag;
          //  __________________________________________________
          let data = res.data.Tag[0];
          this.goodsInfo = data;
          this.goodsInfo.CategoryName = data.KW;
          this.goodsInfo.Resource = data.Resourse;
          this.setBannerList("jz-detail");
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
      // console.log(this.bannerList)
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

      this.$apis.GetRuPCakeByName(data).then(res => {
        callback(res);
      });
    },
    GetjzCakeInfo(callback) {
      var data = {
        Name: this.$route.query.key
      };
      this.$apis.GetjzCakeInfo(data).then(res => {
        callback(res);
      });
    }
  },
  watch: {
    sizeList: {
      handler() {
        // console.log(this.sizeList);
      },
      deep: true
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
.name_box,
.comment,
.jg-box {
  border-bottom: r(25) solid #f5f5f2;
}
.jg-box {
  height: auto;
  padding-bottom: 15vw;
  .jg-gonggao {
    padding: 2vw 0;
    padding-top: 8vw;
    padding-right: 0px;
    padding-left: 0px;
    height: auto;
    background: #fff;
    .jg-gonggao1 {
      margin: 0 4vw;
      font-size: 3.734vw;
      margin-bottom: 8vw;
      clear: both;
      .jg-text-z {
        float: left;
        width: 27vw;
        color: #a2a2a2;
        margin-bottom: 8vw;
      }
      .jg-text-y {
        float: left;
        width: 65vw;
        color: #181818;
        margin-bottom: 8vw;
      }
    }
  }
}
.comment {
  height: 5vw;
  display: flex;
  padding: 5vw;
  justify-content: space-between;
  align-items: center;

  .left {
    height: 5vw;
    text-align: center;
    font-size: r(32);
    img {
      width: 5vw;
      height: 5vw;
      transform: translateY(2vw);
      margin: 0 2vw;
    }
  }
  .right {
    height: 5vw;
    text-align: center;
    font-size: r(32);
    img {
      width: 3vw;
      height: 3vw;
      // transform: translateY(vw);
      margin: 0 2vw;
    }
  }
}

.jg-gonggao {
  background: #f5f5f2;
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
.bang {
  padding: 5vw;
  span {
    display: inline-block;
    border-radius: 2px;
    width: 18vw;
    height: 8vw;
    text-align: center;
    line-height: 8vw;
    margin: 2vw 5.6vw;
    font-size: 3.73vw;
    color: #333;
    border: 1px solid #ddd;
  }
  .active {
    background: #02d3d6;
    border-radius: 2px;
    color: #fff;
    border: 1px solid #02d3d6;
  }
}
.claer {
  display: block;
  width: 18vw;
  height: 8vw;
}
.cake_info {
  border-bottom: r(25) solid #f5f5f2;
  width: 100%;
  height: 30vw;
  box-sizing: border-box;
  padding: 2vw 0;
  div {
    height: 8vw;
    line-height: 8vw;
    padding: 2vw 0;
    display: flex;
    justify-content: space-between;
    span {
      flex: 1;
      padding: 0 5vw;
      font-size: 3vw;
      img {
        width: 7vw;
        padding: 0 1vw;
      }
      i {
        display: inline-block;
        transform: translateY(0);
        font-style: normal;
        -o-text-overflow: ellipsis;
        width: 30vw;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
.jj_box {
  width: 100%;
  height: 14vw;
  box-sizing: border-box;
  padding: 3vw 0;
  div {
    font-size: 3vw;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    line-height: 7vw;
    padding: 0 4vw;
    float: left;
    span {
      float: right;
      padding-right: 3vw;
      font-size: 5vw;
      width: 4vw;
    }
    .num {
      transform: translateY(0.6vw);
    }
    .add,
    .sub {
      font-size: 8vw;
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15vw;
  box-sizing: border-box;
  background: white;
  display: flex;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    width: 40vw;
    flex-direction: column-reverse;
    span {
      display: block;
      width: 36vw;
      i {
        font-style: normal;
        padding: 0 2vw;
        font-size: 2.4vw;
        color: #333;
      }
    }
    .price {
      font-size: 4.53vw;
      color: #f2495e;
      font-weight: bolder;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .center,
  .right {
    width: 30vw;
    font-size: 4vw;
  }
  .right {
    background: #02d3d6;
    color: white;
    font-weight: bold;
  }
}
</style>


