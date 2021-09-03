export interface AlbumsProps {
  userId: number
  id: number
  title: string
}

export interface AlbumsListContextData {
  /**
   * Method to fetch albums
   */
  getAlbumsList(): Promise<void>

  /**
   * Variable containing the albums listing
   */
  albums: AlbumsProps[]
}
