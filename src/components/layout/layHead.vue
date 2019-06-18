<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in nav" :key="index">
        <router-link :to="item.path">
          <img :class="{active:active == index}" :src="item.url[0]" @click="change(index)">
          <img :class="{active:active != index}" :src="item.url[1]" @click="change(index)">
        </router-link>
      </li>
    </ul>
    <div class="tubiao">
      <span>{{this.$store.state.N}}</span>
    </div>
  </div>
</template>

<script>
import Store from "storejs"
var num = 1;
export default {
  name: "HelloWorld",
  data() {
    return {
      active: 8,
      N: "",
      nav: [
        {
          url: [
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-a-1.png",
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-a-2.png"
          ],

          path: "/index"
        },
        {
          url: [
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-b-1.png",
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-b-2.png"
          ],
          path: "/classify"
        },
        {
          url: [
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-c-1.png",
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-c-2.png"
          ],
          path: "/cartList"
        },
        {
          url: [
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-d-1.png",
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-d-2.png"
          ],
          path: "/mine"
        }
      ]
    };
  },
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      this.active = 100;
      // 初始化下标
      let data = Store.get("data");
      var num1 = 0;
      if (data) {
        data.forEach(ele => {
          num1 += ele.num;
        });
        this.$store.state.N = num1;
      }
      // let jsonData = window.localStorage.getItem('data');
      // let oData = JSON.parse(jsonData);
    },
    change(index) {
      this.active = index;
    }
  }
};
</script>

<style scoped lang= 'scss'>
.tubiao {
  width: 4.4vw;
  height: 4.4vw;
  background: rgba(255, 0, 0, 0.774);
  border-radius: 50%;
  z-index: 99999;
  position: absolute;
  top: -0.8vw;
  left: 63vw;
  span {
    display: inline-block;
    height: 100%;
    width: 100%;
    text-align: center;
    color: white;
  }
}
#app {
  width: 100%;
  z-index: 1001;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  background: #fff;
  height: r(86);
  border-top: 1px solid #eee;
}
ul {
  width: 100%;
  height: r(86);
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
  background: white;
}
li {
  display: inline-block;
  text-align: center;
}
a {
  color: #333;
}
img {
  width: 40%;
  color: red;
}
.active {
  display: none;
}
</style>
