import idb from 'idb'

// IndexedDB initialization
const dbPromise = idb.open('mozaic-db', 1, (upgradeDB) => {
  switch (upgradeDB.oldVersion) {
    case 0:
      upgradeDB.createObjectStore('s-artists', { keyPath: 'id' })
      upgradeDB.createObjectStore('s-albums', { keyPath: 'id' })
      upgradeDB.createObjectStore('s-songs', { keyPath: 'id' })
      upgradeDB.createObjectStore('s-album-covers', { keyPath: 'id' })
  }
})

const add = (os, item) => {
  console.log(`[IDB]: Inserting object into store '${os}'`, item)
  return dbPromise
    .then(db => {
      return db.transaction(os, 'readwrite').objectStore(os).put(item)
    })
}

const addAll = (os, items) => {
  for (let item of items) {
    add(os, item)
  }
}

export default {
  getAll: (os, ids) => {
    return dbPromise
      .then(db => {
        return db.transaction(os).objectStore(os).getAll()
      })
      .then(allObjs => {
        return allObjs
      })
  },
  add: add,
  addAll: addAll
}
