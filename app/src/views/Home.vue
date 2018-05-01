<template lang='pug'>
  el-container
    el-aside(width='300px')
      el-menu()

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

    #albums
      flex: 2
</style>
