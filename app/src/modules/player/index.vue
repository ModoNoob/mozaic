<template lang='pug'>
  el-header#player Hello from Player!
</template>

<script>
import { mapGetters } from 'vuex'
import store from './_store'

export default {
  name: 'player',
  components: {

  },
  computed: {
    ...mapGetters({
      playerState: '$_player/playerState'
    })
  },
  created () {
    this.$store.registerModule('$_player', store)
  },
  mounted () {
    // this.$store.dispatch('$_player/getProducts');
  }
}
</script>

<style lang='sass' scoped>
#player
  min-height: 50px

</style>
