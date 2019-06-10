<template>
  <div id='app01'>
    <div class="banner">
      <mt-swipe :auto="4000">
      <mt-swipe-item>
        <a href="/act/2019-item-entrance"><img src="https://res.bestcake.com/m-images/banner_new/368311689846465800.jpg?v=2" class="top-banner-li-img"></a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="/act/2019-item-618?back=1"><img src="https://res.bestcake.com/m-images/CakeListConfig/749319704926346000.jpg" class="top-banner-li-img"></a>
      </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // var data01 = { type: 'pic', page: 1, pagesize: 10 }
    // this.$apis.joke(data01).then((res) => {
    //   console.log(res)
    //   this.msg = res.data
    // })
  }
}

</script>

<style scoped lang='scss'>
  $color: red;
  #box01 {
    background: $color;
    height: r(50*2);
  }
  .banner {
    width: 100%;
    height: r(340);
    background: blue;
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
</style>
