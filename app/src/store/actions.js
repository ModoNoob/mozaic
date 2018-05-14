import api from '@/api'
import db from '@/db'

const isLoggedIn = (context) => {
  return !!context.state.accessToken
}

const loadAlbums = (context) => {
  // We try to get the data from the DB
  // If there is no data, we query the API for it and insert into the DB.
  // Then we return the data.
  db.getAll('s-albums')
    .then(objs => {
      // We don't have anything stored, let's call the API
      if (!objs || objs.length === 0) {
        console.log("A. We do not have objects in the DB D: Let's load them!")

        api.getMySavedAlbums(1)
          .then((data) => {
            const albums = data.items.map(a => {
              return {
                id: a.album.id,
                name: a.album.name,
                artist_id: a.album.artists[0].id,
                cover_id: getAlbumCoverId(a.album.images[0].url)
              }
            })

            db.addAll('s-albums', albums)
            return albums
          }, (error) => {
            console.error(error)
          })
      } else {
        console.log('A. We have the objects in the DB.')
        return objs
      }
    })
    .then(objs => {
      context.commit('ALBUMS_LOADED', objs)
    })
}

const getAlbumCover = async (context, url) => {
  return url
}

const getAlbumCoverId = (url) => {
  console.log(url)
  return url.split('/').pop()
}

export default {
  isLoggedIn,
  loadAlbums,
  getAlbumCover
}
