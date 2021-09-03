export interface AlbumsProps {
  userId: number
  id: number
  title: string
}

export interface AlbumsListContextData {
  getAlbumsList(): Promise<void>

  albums: AlbumsProps[]
}
