<template lang='pug'>
  div#app(v-bind:class='{ shown: this.shown }')
    router-view(v-if='this.$store.state.isLoggedIn')
    login(v-if='!this.$store.state.isLoggedIn')
</template>

<script>
import Login from './views/Login'

export default {
  name: 'mozaic-app',
  components: {
    Login
  },
  data () {
    return {
      shown: false
    }
  },
  created () {
    this.shown = true
  },
  mounted () {
    const accessToken = this.$route.query.a
    const refreshToken = this.$route.query.r

    if (accessToken && refreshToken) {
      this.$store.commit('LOGIN_COMPLETED', { accessToken, refreshToken })
    }
  }
}
</script>

<style lang='sass'>
  body
    margin: 0
    padding: 0
    font-family: 'Lato', Arial, sans-serif

  h1, h2, h3, h4, h5, h6
    font-family: 'Bitter', serif

  #app
    min-height: 100vh
    opacity: 0
    transition: opacity 100ms linear

    &.shown
      opacity: 1

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
