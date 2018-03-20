<template lang='pug'>
  div#testLeft LEFT
    router-link(to="/test-animations", class='el-button primary') BACK!
</template>

<script>
  export default {
    name: 'testLeft'
  }
</script>

<style lang='sass'>
  #testLeft
    background: red
    width: 100%
    height: 100%
    min-height: 200vh
</style>
