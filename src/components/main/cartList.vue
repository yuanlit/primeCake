<template>
  <div>
    <div class="cartList_box">
      <div id="cart_list">
        <ul>
          <li v-for="(item, index) in cart_data" :key="index">
            <div class="l">
              <input @click="option" type="checkbox" v-model="item.bool">
            </div>
            <div class="c">
              <img style="background:#fffff;" :src="item.url" alt>
            </div>
            <div class="r">
              <div class="r_name">{{item.Name}}</div>
              <div class="r_c">
                <span class="rc_size">{{item.Size}}</span>
                <span class="rc_num">
                  <i style="background:#fffff;">
                    <img
                      src="https://res.bestcake.com\m-images\order\reduce-1.png"
                      @click="sub_num(item.id)"
                    >
                  </i>
                  <span style="background:#fffff;">{{item.num}}</span>
                  <i style="background:#fffff;">
                    <img
                      src="https://res.bestcake.com\m-images\order\add.png"
                      @click="add_num(item.id)"
                    >
                  </i>
                </span>
              </div>
              <div class="r_price">
                <p style="background:#fffff;">{{item.CurrentPrice}}.00</p>
              </div>
            </div>
            <div class="di">
              <span>优惠方式</span>不参加活动
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="clplr left" style="padding-top: 17.2vw; ">
      <!--HOT Recommend内容  -->
      <div class="clplr gwc-hr" align="center">
        <div
          class="clplr"
          style="line-height: 7.46vw; color: #333; font-weight: bold; font-size: 6.4vw;"
        >
          Hot&nbsp;
          Recommend
        </div>
        <div
          class="clplr gwc-hr-1"
          style="width: 100%;
    text-align: center;padding-left: 22.3vw; padding-bottom: 2vw; padding-top: 2vw;"
        >
          <div class="clplr gwc-hr-2" style="width: 52.3vw;height:.7vw;background:#000;"></div>
        </div>
        <div
          class="clplr"
          style="line-height: 4vw; color: #333; font-weight: bold; font-size: 4vw;"
        >热销新品推荐</div>
      </div>
      <!--蛋糕列表内容-->
      <div class="am-u-sm-12 clplr gwc-cake" style="padding-bottom: 22.66vw;">
        <!--style="padding-right:3.2vw;"-->
        <div class="am-u-sm-12 clplr hotli">
          <!--第一个li-->
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="/jz/jz-cakepage/吉致生巧">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg">
              </a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致生巧</div>
            <div class="am-u-sm-12 clplr">
              <div
                class="am-u-sm-10 clplr"
                style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"
              >
                <a
                  style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;"
                >168.00</a>/1盒
              </div>
              <div class="am-u-sm-2 clplr gwc-cake-4" id="addcartimg" align="left">
                <img
                  src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg"
                  ng-touchend="newRecommendCart('JZ-0029-1')"
                >
              </div>
            </div>
          </div>
          <!--第二个li-->
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="/jz/jz-cakepage/吉致牛轧糖(巴旦木味)">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_nzt_v1.jpg">
              </a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致牛轧糖</div>
            <div class="am-u-sm-12 clplr">
              <div
                class="am-u-sm-10 clplr"
                style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"
              >
                <a
                  style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;"
                >68.00</a>/16粒装
              </div>
              <div class="am-u-sm-2 clplr gwc-cake-4" id="addcartimg-2" align="left">
                <img
                  src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg"
                  ng-touchend="newRecommendCart('JZ-0019-17')"
                >
              </div>
            </div>
          </div>
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;float:left">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="/jz/jz-cakepage/吉致泡芙">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_pf_v1.jpg">
              </a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致泡芙</div>
            <div class="am-u-sm-12 clplr">
              <div
                class="am-u-sm-10 clplr"
                style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"
              >
                <a
                  style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;"
                >88.00</a>/0.8磅
              </div>
              <div
                class="am-u-sm-2 clplr gwc-cake-4"
                align="left"
                ng-touchend="newRecommendCart('JZ-0011-5')"
              >
                <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop_box">
      <div class="shop_xz">
        <input type="checkbox" v-model="allSel" @click="allOption">
      </div>
      <div class="shop_qx">全选</div>
      <div class="shop_del" @click="delAll">清空</div>
      <div class="shop_money">
        <div class="money_t">
          合计:&nbsp;&nbsp;
          <span>{{allPrice}}.00</span>
        </div>
        <div class="money_b">已优惠:&nbsp;&nbsp;0.00</div>
      </div>
      <div class="shop_js">结算</div>
    </div>
  </div>
</template>
<script>
import Store from "storejs";
export default {
  data() {
    return {
      cart_data: [],
      optionList: [],
      bool: "",
      allSel: true
    };
  },
  mounted() {
    this.pageInit();
  },
  methods: {
    //  全选
    allOption() {
      var selList = [];
      this.cart_data.forEach(item => {
        item.bool = !this.allSel;
        if (item.bool) {
          selList.push(item);
        }
      });
      this.optionList = selList;
    },
    // 选择框
    option() {
      var selList = [];
      setTimeout(() => {
        // 函数执行时异步
        this.cart_data.map(item => {
          if (item.bool) {
            selList.push(item);
          }
        });
        // vue.$set()
        this.optionList = selList;
      }, 80);
    },
    // 页面初始化
    pageInit() {
      let data = Store.get("data");
      let selList = [];
      var num1 = 0;
      if (data) {
        data.forEach(ele => {
          if (ele.bool) {
            selList.push(item);
          }
          num1 += ele.num;
          ele.bool = false;
        });
        this.cart_data = data;
        this.optionList = selList;
        this.$store.state.N = num1;
      }
    },
    // 商品数量减一
    sub_num(id) {
      this.$store.commit("numSub", id);
      this.pageInit();
    },
    // 商品数量加一
    add_num(id) {
      this.$store.commit("numAdd", id);
      this.pageInit();
    },
    // 删除
    delAll() {
      Store.clear();
      let num1 = 0;
      let data = [];
      this.cart_data.forEach(ele => {
        if (ele.bool == false) {
          num1 += ele.num;
          data.push(ele);
        }
      });
      Store.set("data", data);
      this.pageInit();
    }
  },
  // 属性计算，得出总价
  computed: {
    //  computed 要在视图进行调用一波
    allPrice() {
      let allPrice = 0;
      this.optionList.map(item => {
        allPrice += item.num * item.CurrentPrice;
      });
      if (this.optionList.length == this.cart_data.length) {
        this.allSel = true;
      } else {
        this.allSel = false;
      }
      return allPrice;
    }
  }
};
</script>

<style scoped lang='scss'>
#app {
  // background: #f1efef;

  div {
    box-sizing: border-box;
    //   background: #f1efef;
  }
}

.cartList_box {
  box-sizing: border-box;
  width: 100%;

  i {
    font-style: normal;
  }

  #cart_list {
    ul {
      li {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        min-height: 30vw;
        border-bottom: 2.3vh solid #f1efef;
        position: relative;
        padding-bottom: 5vw;

        div {
          background: white;
          padding-top: 3vh;
        }

        .l {
          flex: 1.5;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .c {
          flex: 3;
          padding-bottom: 6vh;

          img {
            width: 30vw;
            height: 30vw;
            background: white;
          }
        }

        .r {
          flex: 5.5;
          padding-bottom: 6vh;

          .r_name {
            font-size: 4.26vw;
            color: #000;
            /* font-weight: bold; */
            line-height: 5.06vw;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 49vw;
            padding-left: 1vw;
          }

          .r_c {
            .rc_num {
              display: inline-block;
              width: 58%;
              text-align: right;
              padding: 0 3vw;
              box-sizing: border-box;
              color: #333;
              font-weight: bold;
              line-height: 6vw;

              span {
                padding: 0 3vw;
                font-size: 4.26vw;
              }

              i {
                img {
                  width: 3vw;
                }
              }
            }

            .rc_size {
              display: inline-block;
              font-size: 2.93vw;
              width: 38%;
              color: #ccc;
              line-height: 3.46vw;
              margin-top: 1.69vw;
            }
          }

          .r_price {
            p {
              font-size: 3.46vw;
              color: #030303;
              font-weight: bold;
              line-height: 4vw;
              padding-left: 2vw;
              margin-top: 1vh;
            }
          }
        }

        .di {
          border-top: 0.5vh solid #f1efef;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 85%;
          padding: 3vw;
          font-size: 3.73vw;

          span {
            color: #f2495e;
            margin-right: 1.333vw;
            font-weight: bold;
            background: white;
          }
        }
      }
    }
  }
}

.gwc-cake-2 img {
  width: 44vw;
}

.gwc-cake-4 img {
  width: 5.6vw;
  margin-top: -18px;
  transform: translateX(19vw);
}

.gwc-cake-3 {
  line-height: 5.33vw;
  font-size: 3.73vw;
  color: #333;
  margin-bottom: 4.4vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 1.2vw;
  font-weight: bold;
}

.gwc-hr {
  margin-bottom: 12.26vw;
}

.clplr {
  margin: 0;
  padding: 0;
  background: #f1efef;
}

.am-u-sm-12 {
  width: 100%;
  text-align: center;
  padding: 2vw 0;
  background: #f1efef;
}

.gwc-cake {
  padding: 10vw 0;
}

.gwc-cake-1 {
  width: 45vw;
  margin: 1.5vw 2vw 1.5vw 2.9vw;
  background: #f1efef;
}

[class*="am-u-"] {
  float: left;
}
.shop_box {
  width: 100%;
  height: 18vw;
  box-sizing: border-box;
  position: fixed;
  bottom: 6.1vh;
  z-index: 99;
  background: white;
  display: flex;
  div {
    text-align: center;
    line-height: 18vw;
    font-size: 4vw;
    color: #333;
  }
  .shop_xz {
    flex: 1.3;
  }
  .shop_qx {
    flex: 1.5;
  }
  .shop_del {
    flex: 1.5;
  }
  .shop_money {
    flex: 4;
    div {
      font-size: 2.4vw;
      line-height: 8vw;
    }
    .money_t {
      height: 60%;
      text-align: left;
      padding: 0 4vw;
      span {
        display: inline-block;
        font-size: 4.8vw;
        color: #f2495e;
        font-weight: bold;
        position: relative;
        top: 0.3vh;
      }
    }
    .money_b {
      height: 40%;
      text-align: right;
      padding: 0 3vw;
    }
  }
  .shop_js {
    flex: 3;
    background: #02d4d7;
    color: #fff;
    font-weight: bolder;
  }
}
input {
  text-decoration: none;
  display: inline-block;
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
}
</style>
