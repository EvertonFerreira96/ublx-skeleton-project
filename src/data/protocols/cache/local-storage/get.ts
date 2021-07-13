export interface GetStorage {
  get: (key: string) => void
}

export interface GetCollectionStorage{
  getCollection: (data: [{key: string}]) => any
}
