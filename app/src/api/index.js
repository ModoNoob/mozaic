import Spotify from 'spotify-web-api-js'
import globalStore from '@/store'

// Initialization of the API
const s = new Spotify()
s.setAccessToken(globalStore.state.accessToken)

export default {
  getMySavedAlbums: (params) =>{
    let p = {
      limit: 50,
      offset: params.page * 50
    }

    s.getMySavedAlbums(p, (error, data) => {
      if (error)
        console.error(error)
      else
        return data.items
    })
  }
}
