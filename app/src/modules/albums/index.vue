<template lang='pug'>
  el-container#albums
    el-main
      el-row
        el-col.album(v-bind:xs='4' v-bind:md='4' v-bind:lg='4' v-for='album in this.$store.state.albums' v-bind:key='album.id' v-bind:style='getAlbumArtStyle(album.cover_id)')
</template>

<script>
export default {
  name: 'albums',
  components: {

  },
  computed: {

  },
  methods: {
    getAlbumArtStyle (coverId) {
      return `background-image: url('https://i.scdn.co/image/${coverId}')`
    }
  },
  mounted () {
    this.$store.dispatch('loadAlbums')
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
