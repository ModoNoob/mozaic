<template lang='pug'>
  div
    h1 Here we return from Spotify
    span Here is the stuff they gave us
    span {{ this.$route.hash }}
</template>

<script>
export default {
  created () {
    // this.$store.registerModule('$_albums', store)
  },
  mounted () {
    this.$store.commit('SPOTIFY_AUTH_INFO_CHANGED', null)

    console.log(this.$store.spotifyAuthInfo)
    console.log(this.$route.hash)
  }
}
</script>
