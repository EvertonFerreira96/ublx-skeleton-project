export interface SetStorage {
  set: (key: string, value: object) => void
}


export interface SetCollectionStorage {
  setCollection: (data:[{key: string, value: object}]) => void
}

