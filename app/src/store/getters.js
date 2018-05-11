import db from '@/db'

const albums = () => {
  // We try to get the data from the DB
  // If there is no data, we query the API for it and insert into the DB.
  // Then we return the data.
  let data = db.
}

const artists = () => {
  return []
}

const songs = () => {
  return []
}

export default {
  accessToken: state => state.accessToken,
  refreshToken: state => state.refreshToken,
  albums: albums,
  artists: artists,
  songs: songs
}
