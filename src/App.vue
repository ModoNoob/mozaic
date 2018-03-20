<template lang='pug'>
  div#app
    player
    router-view
</template>

<script>
import Player from '@/modules/player'

export default {
  name: 'mozaic-app',
  components: {
    Player
  }
}
</script>

<style lang='sass'>
  body
    margin: 0
    padding: 0

  #app
    display: flex
    flex-direction: column
    min-height: 100vh

  .child-view
    position: absolute
    transition: transform 500ms cubic-bezier(0.77, 0, 0.175, 1)

  .slide-left-enter,
  .slide-right-leave-active
    transform: translate(100%, 0)

  .slide-left-leave-active,
  .slide-right-enter
    transform: translate(-100%, 0)
</style>
