export interface RemoveStorage {
  remove: (key: string) => any
}

export interface RemoveCollectionStorage{
  removeCollection: (data: [{key: string}]) => Promise<[string | null]>
}
