<template lang='pug'>
  div#testContainer
    transition(:name='transitionName', duration='500')
      router-view(class='child-view')
</template>

<script>
  export default {
    name: 'testContainer',
    data () {
      return {
        transitionName: 'slide-right'
      }
    },
    beforeRouteUpdate (to, from, next) {
      if (from.path === '/test-animations') {
        if (to.path === '/test-animations/left') {
          this.transitionName = 'slide-right'
        } else if (to.path === '/test-animations/right') {
          this.transitionName = 'slide-left'
        }
      } else {
        if (from.path === '/test-animations/left') {
          this.transitionName = 'slide-left'
        } else if (from.path === '/test-animations/right') {
          this.transitionName = 'slide-right'
        }
      }
      next()
    }
  }
</script>

<style lang='sass'>
  #testContainer
    background: purple
    min-height: 100vh
    transition: transform 500ms linear
</style>
