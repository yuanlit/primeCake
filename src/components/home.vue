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
<style scoped>
h1, h2 {
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
