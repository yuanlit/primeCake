<template>
  <div>
    <layHead></layHead>
    <router-view/>
  </div>
</template>

<script>
import layHead from '@/components/layout/layHead'
export default {
  components: {
    layHead
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
