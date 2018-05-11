<template lang='pug'>
  el-container#albums
    el-main
      el-row
        el-col.album(v-bind:xs='4' v-bind:md='4' v-bind:lg='4' v-for='album in this.albums' v-bind:key='album.album.id' v-bind:style='getAlbumArtStyle(album.album.images[0].url)')
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
    getMySavedAlbums (page) {
      this.$store.dispatch('$_albums/getMySavedAlbums', { page: page })
    },
    getAlbumArtStyle (url) {
      return `background-image: url('${url}')`
    }
  },
  created () {
    this.$store.registerModule('$_albums', store)
  },
  mounted () {
    for (var i = 0; i < 15; i++) {
      this.getMySavedAlbums(i)
    }
  }
}
</script>

<style lang='sass' scoped>
  .album
    padding-bottom: 16.66667%
    background-size: cover
    background-position: center center
    background-repeat: no-repeat

  header,
  main
    padding: 0

  h1
    font-size: 2rem
    margin-top: 0

</style>
