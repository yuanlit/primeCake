<template>
  <div id='app01'>
    <h1>
      欢迎来到,21cake
    </h1>
    <div id="box01">我是主页的盒子</div>
  </div>
</template>

<script>
export default {
  mounted () {
    // var data = { type:'pic', page:1, pagesize:10 }
    // this.$apis.joke().then((res)=>{
    //       console.log(res)
    //       this.msg = res.data;
    // })
  }
}

</script>

<style scoped lang='scss'>
  $color: red;
  #box01 {
    background: $color;
    height: r(50*2);
  }

</style>
