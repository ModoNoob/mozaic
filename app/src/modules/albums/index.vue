<template lang='pug'>
  el-container#albums Albums
    el-row
      el-col.album(v-bind:span='3' v-for='album in this.albums' v-bind:key='album.album.id')
        img(v-bind:src='album.album.images[1].url')
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
    getMySavedAlbums () {
      this.$store.dispatch('$_albums/getMySavedAlbums')
    }
  },
  created () {
    this.$store.registerModule('$_albums', store)
  },
  mounted () {
    this.getMySavedAlbums()
  }
}
</script>

<style lang='sass' scoped>
  .album
    img
      width: 100%
</style>
