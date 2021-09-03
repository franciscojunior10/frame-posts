export interface PostsProps {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostsListContextData {
  /**
   * Method to fetch posts
   */
  getPostsList(): Promise<void>

  /**
   * Variable containing the posts listing
   */
  posts: PostsProps[]
}
