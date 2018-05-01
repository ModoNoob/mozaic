const isLoggedIn = (context) => {
  return !!context.state.accessToken
}

export default {
  isLoggedIn
}
