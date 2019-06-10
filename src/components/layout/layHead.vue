<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in nav" :key="index">
          <router-link :to="item.path"><img :src="item.name"></router-link>
        </li>
    </ul>
  </div>
</template>

<script>
var num = 1
export default {
  name: 'HelloWorld',
  data () {
    return {
      nav: [
        { name: 'https://res.bestcake.com/m-images/ww/foot/foot-menu-a-' + num + '.png', path: '/index' },
        { name: 'https://res.bestcake.com/m-images/ww/foot/foot-menu-b-' + num + '.png', path: '/news' },
        { name: 'https://res.bestcake.com/m-images/ww/foot/foot-menu-c-' + num + '.png', path: '/info' },
        { name: 'https://res.bestcake.com/m-images/ww/foot/foot-menu-d-' + num + '.png', path: '/about_me' }
      ]
    }
  }
}
</script>

<style scoped lang= 'scss'>
#app {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
ul {
  width: 100%;
  height: r(86);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
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
