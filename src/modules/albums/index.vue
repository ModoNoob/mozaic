<template lang='pug'>
  div#albums Hello from Albums!
</template>

<script>
import { mapGetters } from 'vuex'
import store from './_store'

export default {
  name: 'albums',
  components: {

  },
  computed: {
    ...mapGetters({
      playerState: '$_albums/albums'
    })
  },
  created () {
    this.$store.registerModule('$_albums', store)
  },
  mounted () {
    // this.$store.dispatch('$_player/getProducts');
  }
}
</script>

<style lang='sass' scoped>
#albums
  background: blue
</style>
