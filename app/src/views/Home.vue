<template lang='pug'>
  el-container#home
    el-header#home-header
      el-menu(mode='horizontal')
        el-menu-item(index='1')
          span Albums
        el-menu-item(index='2')
          span Artists
        el-menu-item(index='3')
          span Songs
    el-main#home
      albums#albums
</template>

<script>
import Albums from '@/modules/albums'

export default {
  name: 'home',
  components: {
    Albums
  }
}
</script>

<style lang='sass'>
  #home
    display: flex
    flex: 2
    width: 100%
    background: #fcfcfc

    #home-header
      background: #fff
      border-bottom: 1px solid #ddd
      box-shadow: 0 2px 10px #f0f0f0
      z-index: 10

    #albums
      flex: 2
</style>
