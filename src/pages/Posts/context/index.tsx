import { FC } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

import { api } from 'services/api'

import { PostsListContextData, PostsProps } from './props'

const initialValue = {} as PostsListContextData

const PostsListContext = createContext(initialValue)

export const PostsListProvider: FC = props => {
  const { children } = props

  const [posts, setPosts] = useState<PostsProps[]>([])

  const getPostsList = useCallback(async () => {
    try {
      const response = await api.get<PostsProps[]>('/posts')

      setPosts(response.data)
    } catch (error) {}
  }, [])

  return (
    <PostsListContext.Provider value={{ getPostsList, posts }}>
      {children}
    </PostsListContext.Provider>
  )
}

export function usePostList(): PostsListContextData {
  const context = useContext(PostsListContext)

  if (!context || context === initialValue) {
    throw new Error('usePostList must be used within a PostsListProvider')
  }
  return context
}
