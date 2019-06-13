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
  </div>
</template>

<script>
var num = 1;
export default {
  name: "HelloWorld",
  data() {
    return {
      active:8,
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
  mounted(){
    console.log(location.hash)
    if(location.hash == "#/index"){
      this.active = 0;
    }else if (location.hash == "#/classify"){
      this.active = 1;
    }else if (location.hash == "#/cartList"){
      this.active = 2;
    }else if (location.hash == "#/mine"){
      this.active = 3;
    }
  },
  methods: {
    change (index) {
      this.active = index;
    }
  }
};
</script>

<style scoped lang= 'scss'>
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
