import { FC } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

import { api } from 'services/api'

import { AlbumsListContextData, AlbumsProps } from './props'

const initialValue = {} as AlbumsListContextData

const AlbumsListContext = createContext(initialValue)

export const AlbumsListProvider: FC = props => {
  const { children } = props

  const [albums, setAlbums] = useState<AlbumsProps[]>([])

  const getAlbumsList = useCallback(async () => {
    try {
      const response = await api.get<AlbumsProps[]>('/posts')

      setAlbums(response.data)
    } catch (error) {}
  }, [])

  return (
    <AlbumsListContext.Provider value={{ getAlbumsList, albums }}>
      {children}
    </AlbumsListContext.Provider>
  )
}

export function useAlbumsList(): AlbumsListContextData {
  const context = useContext(AlbumsListContext)

  if (!context || context === initialValue) {
    throw new Error('useAlbumsList must be used within a AlbumsListProvider')
  }
  return context
}
