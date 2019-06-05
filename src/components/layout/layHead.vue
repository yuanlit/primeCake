<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in nav" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nav: [
        { name: '首页', path: '/index' },
        { name: '新闻', path: '/news' },
        { name: '信息', path: '/info' },
        { name: '关于我们', path: '/about_me' },
        { name: '联系我们', path: '/call_me' }
      ]
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  padding-bottom: 30px;
  margin-top: 40px;
  text-align: center;
  width: 100%;
  clear: both;
}
li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  float: left;
}
a {
  color: #42b983;
  margin: 3px;
  text-decoration: none;
}
</style>
