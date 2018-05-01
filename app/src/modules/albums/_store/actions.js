import Spotify from 'spotify-web-api-js'
import globalStore from '@/store'

const getMySavedAlbums = (context) => {
  let s = new Spotify()
  s.setAccessToken(globalStore.state.accessToken)

  s.getMySavedAlbums(null, (error, data) => {
    error && console.log(error)
    context.commit('ALBUMS_LOADED', data.items)
  })
}

export default {
  getMySavedAlbums
}
