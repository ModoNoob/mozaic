<template lang='pug'>
  div#testDefault DEFAULT
    router-link(to="/test-animations/left", class='el-button primary') LEFT!
    router-link(to="/test-animations/right", class='el-button primary') RIGHT!
</template>

<script>
  export default {
    name: 'testDefault'
  }
</script>

<style lang='sass'>
  #testDefault
    background: purple
    width: 100%
    height: 100%
</style>
