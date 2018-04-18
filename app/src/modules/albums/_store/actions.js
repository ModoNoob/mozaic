import Spotify from 'spotify-web-api-js'
// import globalStore from '@/store'

const authenticate = (context) => {
  // window.location.href = 'https://accounts.spotify.com/authorize?response_type=token&client_id=' + clientID + '&scope=' + scopes + '&redirect_uri=' + redirectUri + '&state=1'
}

const getMySavedAlbums = (context) => {
  let s = new Spotify()
  // s.setAccessToken(access_token)

  s.getMySavedAlbums(null, (error, data) => {
    error && console.log(error)
    console.log(data)
  })
}

export default {
  authenticate,
  getMySavedAlbums
}
