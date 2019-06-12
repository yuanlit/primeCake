<template>
  <div>
    <layHead v-if="!(this.$route.path == '/show')"></layHead>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"  v-wechat-title="$route.meta.title" img-set="/static/logo.png"/>>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
import layHead from '@/components/layout/layHead'
export default {
  data(){
    return {

    }
  },
  components: {
    layHead
  },
  mounted(){

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
