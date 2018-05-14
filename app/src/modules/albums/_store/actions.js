/* import Spotify from 'spotify-web-api-js'
import globalStore from '@/store'

const getMySavedAlbums = (context, params) => {
  let s = new Spotify()
  s.setAccessToken(globalStore.state.accessToken)

  let p = {
    limit: 50,
    offset: params.page * 50
  }

  s.getMySavedAlbums(p, (error, data) => {
    error && console.log(error)
    context.commit('ALBUMS_LOADED', data.items)
  })
} */

export default {
  // getMySavedAlbums
}
