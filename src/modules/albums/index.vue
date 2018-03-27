<template lang='pug'>
  div#albums Hello from Albums!
    el-button(type='primary', v-on:click='authenticate()') Authenticate!
    el-button(type='primary', v-on:click='getMySavedAlbums()') Get my saved albums!
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
      albums: '$_albums/albums'
    })
  },
  methods: {
    authenticate () {
      this.$store.dispatch('$_albums/authenticate')
    },
    getMySavedAlbums () {
      this.$store.dispatch('$_albums/getMySavedAlbums')
    }
  },
  created () {
    this.$store.registerModule('$_albums', store)
  },
  mounted () {

  }
}
</script>

<style lang='sass' scoped>
#albums
  background: #111
</style>
