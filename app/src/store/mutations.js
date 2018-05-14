const LOGIN_COMPLETED = (state, params) => {
  state.isLoggedIn = true
  state.accessToken = params.accessToken
  state.refreshToken = params.refreshToken
}

const ALBUMS_LOADED = (state, albums) => {
  state.albums = state.albums.concat(albums)
}

export default {
  LOGIN_COMPLETED,
  ALBUMS_LOADED
}
