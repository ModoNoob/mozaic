<template lang='pug'>
  el-main#login
    h1 Please sign in to Spotify to continue.
    a(href='/auth/login') Sign in
</template>

<script>
export default {
  name: 'login',
  created () {
  },
  mounted () {
  }
}
</script>

<style lang='sass' scoped>
</style>
