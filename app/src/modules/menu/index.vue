<template lang='pug'>
  el-container#albums
    //el-header()
      el-row
        el-col(v-bind:span='24')
          h1 Albums
    el-main
      el-row
        el-col.album(v-bind:xs='12' v-bind:md='8' v-bind:lg='4' v-for='album in this.albums' v-bind:key='album.album.id' v-bind:style='getAlbumArtStyle(album.album.images[0].url)')
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

</style>
