import Spotify from 'spotify-web-api-js'

const s = new Spotify()

export default {
  init: (accessToken) => {
    s.setAccessToken(accessToken)
  },
  getMySavedAlbums: (page) => {
    let p = {
      limit: 50,
      offset: page * 50
    }

    return s.getMySavedAlbums(p)
  }
}
