<template>
  <div class="hello">
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item
        v-for="(item,index) in routePath"
        :id="item.key"
        :key="index"
        @click.native="tab(index)"
      >
      <p><i :class="item.ico"></i></p>
      {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      routePath: [
        { name: "首页", path: "/index", key: "index" ,ico:['fa','fa-telegram','fa-lg']},
        { name: "分类", path: "/class", key: "class",ico:['fa','fa-camera-retro','fa-lg'] },
        { name: "购物车", path: "/cart", key: "cart" ,ico:['fa','fa-camera-retro','fa-lg']},
        { name: "我的", path: "/user", key: "user" ,ico:['fa','fa-camera-retro','fa-lg']}
      ]
    };
  },
  methods: {
    tab(index) {
      this.$router.push({
        path: this.routePath[index].path
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


