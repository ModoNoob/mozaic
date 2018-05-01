const LOGIN_COMPLETED = (state, params) => {
  state.isLoggedIn = true
  state.accessToken = params.accessToken
  state.refreshToken = params.refreshToken
}

export default {
  LOGIN_COMPLETED
}
