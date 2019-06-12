<template>
  <div id="clssify">
    <div class="tab">
      <span
        :class="{active:active==index}"
        v-for="(item, index) in classify"
        :key="index"
        @click="test(index)"
      >{{item}}</span>
    </div>
    <div class="tab_b">
      <span
        :class="{active_b:active_bl == index}"
        v-show="active===0"
        v-for="(item, index) in classify_bl"
        :key="index"
        @click="test01(index,item.mark)"
      >{{item.name}}</span>
      <span class="active_b" v-show="active===1" @click="two">{{classify_br}}</span>
    </div>
    <div class="goods_box">
      <ul>
        <li v-for="(item, index) in activeList" :key="index">
          <img :src="item.imgUrl">
          <div class="list-product-b">
            <span>{{item.Name}}</span>
          </div>
          <div class="list-product-c">
            <span>{{item.Means}}</span>
          </div>
          <div class="list-product-d" style="font-size: 0px;">
            <span style="color: rgb(255, 51, 0); font-size: 3.2vw; padding-left: 2vw;">￥</span>
            <span style="color: rgb(255, 51, 0); font-size: 4.267vw;">{{item.CurrentPrice}}</span>
            <span style="color: rgb(255, 51, 0); font-size: 3.2vw;">.00</span>
            <span style="color: rgb(188, 188, 188); font-size: 3.2vw; margin-left: 1.067vw;">/ 1.2磅</span>
            <div class="list-product-e">
              <img
                src="https://res.bestcake.com\m-images-2\list-cart.png?v=1"
                class="am-img-responsive"
              >
            </div>
          </div>
        </li>
      </ul>
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
export default {
  name: "HelloWorld",
  data() {
    return {
      classify: ["自营", "贝式严选"],
      classify_bl: [
        { name: "经典", mark: "KSK" },
        { name: "女神", mark: "NS" },
        { name: "伴手礼", mark: "JZ" }
      ],
      classify_br: "乳品",
      active: 0,
      active_bl: 0,
      jd: [],
      ns: [],
      yx: [],
      bsl: [],
      goodsList: [],
      activeList: []
    };
  },
  mounted() {
    Indicator.open();
    this.pageInit();
  },
  methods: {
    test(index) {
      this.active = index;
      if (index == 1) {
        this.two();
      }
    },
    test01(index, mark) {
      this.active_bl = index;
      this.optionData(mark);
    },
    // 页面初始化
    pageInit() {
      // https://res.bestcake.com/m-images/jd-detail/极地牛乳/极地牛乳-1.jpg?v=20170607
      this.GetJdListNew(res => {
        var goodsList = res.data.Tag.cakelist;
        var url = "https://res.bestcake.com/m-images/ww/";
        // https://res.bestcake.com/m-images/ww/jd/极地牛乳.png?v=18
        // https://res.bestcake.com/m-images/ww/ns/一见倾心.jpg?v=14
        // https://res.bestcake.com/m-images/ww/jz/草莓先生.png?v=14
        // https://res.bestcake.com/m-images/ww/rp/可莱思迪客英国进口冰淇淋(500ml).jpg?v=18
        goodsList.forEach(ele => {
          // console.log(ele.SupplyNo)
          if (ele.SupplyNo.indexOf("KSK") != -1) {
            // 经典
            ele.imgUrl = `${url}jd/${ele.Name}.png?v=18`;
            this.jd.push(ele);
          } else if (ele.SupplyNo.indexOf("NS") != -1) {
            // 女神
            ele.imgUrl = `${url}ns/${ele.Name}.jpg?v=14`;
            this.ns.push(ele);
          } else if (ele.SupplyNo.indexOf("RP") != -1) {
            // 严选
            ele.imgUrl = `${url}rp/${ele.Name}.jpg?v=18`;
            this.yx.push(ele);
          } else if (ele.SupplyNo.indexOf("JZ") != -1) {
            // 伴手礼
            ele.imgUrl = `${url}jz/${ele.Name}.png?v=14`;
            this.bsl.push(ele);
          }
        });
        this.goodsList = goodsList;
        this.optionData(this.classify_bl[0].mark);
      });
    },
    optionData(mark) {
      var activeList = [];
      this.goodsList.forEach(item => {
        if (item.SupplyNo.indexOf(mark) != -1) {
          activeList.push(item);
        }
      });
      this.activeList = activeList;
      Indicator.close();
    },
    two() {
      this.optionData("RP");
    },
    // 调取接口部分----------------------
    // 调取分类页接口
    GetJdListNew(callback) {
      this.$apis.GetJdListNew().then(res => {
        callback(res);
      });
    }
  }
};
</script>

<style scoped lang = "scss">
#clssify {
  .tab {
    width: 100%;
    height: r(98);
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    span {
      height: 98%;
      line-height: r(98);
      text-align: center;
      flex: 1;
      font-size: r(32);
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
    }
    .active {
      border-bottom: 2px solid #1db0b8;
      color: #1db0b8;
    }
  }
  .tab_b {
    width: 100%;
    height: r(68);
    display: flex;
    padding: 0 r(130);
    box-sizing: border-box;
    justify-content: space-around;
    margin-top: r(36);

    span {
      font-size: r(30);
      line-height: r(80);
    }
    .active_b {
      font-size: r(35);
      font-weight: 700;
      font-family: "宋体";
      border-bottom: 5px solid #95d5d8;
    }
  }
}
.goods_box {
  padding: 0 1.6vw;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 47%;
      height: 63vw;
      margin-bottom: 5vw;
      img {
        width: 45vw;
        height: 45vw;
      }
      .list-product-b {
        margin-top: 1.867vw;
        line-height: 3.734vw;
        span {
          font-size: 3.734vw;
          color: #333;
          padding-left: 2vw;
        }
      }
      .list-product-c {
        
        width: 32vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 5vw;
        span {
          overflow: hidden;
          font-size: 3.2vw;
          color: #999;
          padding-left: 2vw;
        }
        
      }
      .list-product-d {
          position: relative;
          .list-product-e {
            width: 5.334vw;
            height: 5.334vw;
            position: absolute;
            right: 1vw;
            bottom: 0vw;
            img {
              display: block;
              max-width: 100%;
              height: auto;
            }
          }
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
</style>

