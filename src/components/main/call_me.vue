<template>
    <div>
        <!-- <i class="Example of hand-lizard-o"></i> -->
        <mt-progress :value="60" :bar-height="10">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
        </mt-progress>
        <h1>
            公司倒闭,已经跑路了,有缘再见啦!各位亲.
        </h1>
        <router-link :to="{name:'about_me', params: {id: 33}}">关于我们</router-link>
    </div>
</template>

<script>
export default {
//   data () {

//   },
  mounted () {
  // console.log(this.$route)
  }
}
</script>
