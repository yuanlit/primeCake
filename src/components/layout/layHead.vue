<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in nav" :key="index">
        <router-link :to="item.path">
          <img :src="item.url">
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
      nav: [
        {
          url:
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-a-" +
            num +
            ".png",
          path: "/index"
        },
        {
          url:
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-b-" +
            num +
            ".png",
          path: "/classify"
        },
        {
          url:
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-c-" +
            num +
            ".png",
          path: "/cartList"
        },
        {
          url:
            "https://res.bestcake.com/m-images/ww/foot/foot-menu-d-" +
            num +
            ".png",
          path: "/mine"
        }
      ]
    };
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
</style>
