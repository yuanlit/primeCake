<template>
  <div>
    <div class='cartList_box'>
      <div id="cart_list">
        <ul>
          <li v-for="(item, index) in $store.state.shopCart.list" :key="index">
            <div class="l"><input type="checkbox"></div>
            <div class="c"><img style="background:#fffff;" :src="item.url" alt=""></div>
            <div class="r">
              <div class="r_name">{{item.Name}}</div>
              <div class="r_c">
                <span class="rc_size">{{item.Size}}</span>
                <span class="rc_num">
                  <i style="background:#fffff;"><img src="https://res.bestcake.com\m-images\order\reduce-1.png"></i>
                  <span style="background:#fffff;">{{item.num}}</span>
                  <i style="background:#fffff;"> <img src="https://res.bestcake.com\m-images\order\add.png"></i>
                </span>
              </div>
              <div class="r_price">
                <p style="background:#fffff;">{{item.CurrentPrice}}.00</p>
              </div>
            </div>
            <div class="di"><span>优惠方式</span>不参加活动</div>
          </li>
        </ul>
      </div>
    </div>

    <div class=" clplr left" style="padding-top: 17.2vw; ">
      <!--HOT Recommend内容  -->
      <div class=" clplr gwc-hr" align="center">
        <div class="clplr" style="line-height: 7.46vw; color: #333; font-weight: bold; font-size: 6.4vw;">Hot&nbsp;
          Recommend</div>
        <div class=" clplr gwc-hr-1" style="width: 100%;
    text-align: center;padding-left: 22.3vw; padding-bottom: 2vw; padding-top: 2vw;">
          <div class=" clplr gwc-hr-2" style="width: 52.3vw;height:.7vw;background:#000;"></div>
        </div>
        <div class=" clplr" style="line-height: 4vw; color: #333; font-weight: bold; font-size: 4vw;">热销新品推荐</div>
      </div>
      <!--蛋糕列表内容-->
      <div class="am-u-sm-12 clplr gwc-cake" style="padding-bottom: 22.66vw;">
        <!--style="padding-right:3.2vw;"-->
        <div class="am-u-sm-12 clplr hotli">
          <!--第一个li-->
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="/jz/jz-cakepage/吉致生巧">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg"></a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致生巧</div>
            <div class="am-u-sm-12 clplr">
              <div class="am-u-sm-10 clplr" style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"><a
                  style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;">168.00</a>/1盒</div>
              <div class="am-u-sm-2 clplr gwc-cake-4" id="addcartimg" align="left">
                <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg"
                  ng-touchend="newRecommendCart('JZ-0029-1')">
              </div>
            </div>
          </div>
          <!--第二个li-->
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="/jz/jz-cakepage/吉致牛轧糖(巴旦木味)">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_nzt_v1.jpg"></a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致牛轧糖</div>
            <div class="am-u-sm-12 clplr">
              <div class="am-u-sm-10 clplr" style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"><a
                  style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;">68.00</a>/16粒装</div>
              <div class="am-u-sm-2 clplr gwc-cake-4" id="addcartimg-2" align="left">
                <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg"
                  ng-touchend="newRecommendCart('JZ-0019-17')">
              </div>
            </div>
          </div>
          <div class="am-u-sm-6 clplr gwc-cake-1" style="padding-right: 1.73vw;float:left">
            <div class="am-u-sm-12 clplr gwc-cake-2">
              <a href="/jz/jz-cakepage/吉致泡芙">
                <img src="https://res.bestcake.com\m-images\cart\mw_firm_pf_v1.jpg"></a>
            </div>
            <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致泡芙</div>
            <div class="am-u-sm-12 clplr">
              <div class="am-u-sm-10 clplr" style="font-size: 3.46vw; color: #333; line-height: 3.46vw;"><a
                  style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;">88.00</a>/0.8磅</div>
              <div class="am-u-sm-2 clplr gwc-cake-4" align="left" ng-touchend="newRecommendCart('JZ-0011-5')">
                <img src="https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="jj_box">
        <div class="jj_l">购买数量</div>
        <div class="jj_r"></div>
    </div>
  </div>
</template>
<script>
  export default {};

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

            input {
              text-decoration: none;
              display: inline-block;
              width: 6vw;
              height: 6vw;
              border-radius: 50%;
            }
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
            border-top: .5vh solid #f1efef;
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
    margin: 1.5vw 2.0vw 1.5vw 2.9vw;
    background: #f1efef;
  }

  [class*=am-u-] {
    float: left;
  }
  .jj_box {
  width: 100%;
  height: 18vw;
  box-sizing: border-box;
  padding: 3vw 0;
  position: fixed;
  bottom: 6.1vh;
  z-index: 99;
  background: white;
  
  div {
    font-size: 3vw;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    line-height: 7vw;
    padding: 0 4vw;
    float: left;
  }
}

</style>
