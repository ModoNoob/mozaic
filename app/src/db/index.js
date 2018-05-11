import idb from 'idb'

// IndexedDB initialization
const dbPromise = idb.open('mozaic-db', 1, (upgradeDB) => {
  switch (upgradeDB.oldVersion) {
    case 0:
      upgradeDB.createObjectStore('s-artists', { keyPath: 'id' })
      upgradeDB.createObjectStore('s-albums', { keyPath: 'id' })
      upgradeDB.createObjectStore('s-songs', { keyPath: 'id' })
  }
})

export default {
  getAll: (os) => {
    return dbPromise.then(db => {
      return db.transaction(os).objctStore(os).getAll()
    }).then(allObjs => { return allObjs })
  }
}
