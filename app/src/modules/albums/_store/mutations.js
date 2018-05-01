const ALBUMS_LOADED = (state, albums) => {
  console.log(albums)
  state.albums = albums
}

export default {
  ALBUMS_LOADED
}
