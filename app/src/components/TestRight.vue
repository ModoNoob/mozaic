<template lang='pug'>
  div#testRight RIGHT
    router-link(to="/test-animations", class='el-button primary') BACK!
</template>

<script>
  export default {
    name: 'testRight'
  }
</script>

<style lang='sass'>
  #testRight
    background: blue
    width: 100%
    height: 100%
</style>
