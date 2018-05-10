const ALBUMS_LOADED = (state, albums) => {
  console.log(albums)

  state.albums = state.albums.concat(albums)
}

export default {
  ALBUMS_LOADED
}
