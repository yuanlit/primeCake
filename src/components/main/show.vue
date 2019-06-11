<template>
  <div id="show">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img class="imgs" :src="item">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      bannerList: []
    };
  },
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      // 初始化执行
      if (this.$route.query.c == "ns") {
        this.GetNSCakeByName(res => {
          console.log(res);
        });
         this.setBannerList("ns-detail");
      }else{
        this.GetCakeByName(res => {
          console.log(res);
        });
         this.setBannerList("jd-detail");
      }
    },
    setBannerList(path) {
      //  星光游乐园/星光游乐园-1.jpg
      for (var i = 0; i < 4; i++) {
        // https://res.bestcake.com/m-images/ns-detail/星光游乐园/星光游乐园-1.jpg
       // https://res.bestcake.com/m-images/jd-detail/奥利奥雪域牛乳芝士/%E5%A5%A5%E5%88%A9%E5%A5%A5%E9%9B%AA%E5%9F%9F%E7%89%9B%E4%B9%B3%E8%8A%9D%E5%A3%AB-1.jpg?v=20170607
        var str = `https://res.bestcake.com/m-images/${path}/${
          this.$route.query.key
        }/${this.$route.query.key}-${i + 1}.jpg`;
        this.bannerList.push(str);
      }
      console.log(this.bannerList);
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
    GetCakeByName(callback){
       var data = {
        ProName: this.$route.query.key
      };
       // 商品详情接口
      this.$apis.GetCakeByName(data).then(res => {
        callback(res);
      });
    }
  }
};
</script>

<style scoped lang="scss">
#show {
  .swipe {
    width: 100%;
    height: r(190 * 2);
    .imgs {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


