<template>
  <div class="home">
    犀鸟
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    console.log(context.store)
  },
  data () {
    return {
      init: '1'
    }
  },
  beforeMount () {
    console.log(this)
  }
}
</script>

<style lang="less" scoped>
</style>
