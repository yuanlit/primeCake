<template>
    <div>
        <h1>
            除了划水,啥也不会
        </h1>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    console.log(this.$route.params)
  }
}
</script>
