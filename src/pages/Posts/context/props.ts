export interface PostsProps {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostsListContextData {
  getPostsList(): Promise<void>

  posts: PostsProps[]
}
