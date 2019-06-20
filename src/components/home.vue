<template>
  <div>
    <layHead v-if="!((this.$route.path == '/show')||(this.$route.path == '/userInfo')||(this.$route.path == '/register'))"></layHead>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"  v-wechat-title="$route.meta.title" img-set="/static/logo.png"/>>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" img-set="/static/logo.png"/>
  </div>
</template>

<script>
import layHead from '@/components/layout/layHead'
export default {
  data(){
    return {
      bool:true
    }
  },
  components: {
    layHead
  },
  mounted(){
    this.pageInit();
  },
  methods: {
    pageInit () {

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang= 'scss'>
$color: red;
#box01 {
   background: $color;
   height:r(48*2);
   width: r(500);
}
</style>
