import { FC, useEffect } from 'react'

import { Layout } from 'components/Layout'
import { TabName } from 'components/TabName'
import { withContext } from 'utils/withContext'

import { PostsListProvider, usePostList } from './context'
import { PostsProps } from './context/props'
import * as Styled from './styles'

const Posts: FC = withContext(() => {
  const { getPostsList, posts } = usePostList()

  useEffect(() => {
    getPostsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TabName tabName="posts">
      <Layout titlePage="Posts">
        <Styled.PostsContainer>
          {posts.map((post: PostsProps) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <h3>{post.body}</h3>
              <div />
            </div>
          ))}
        </Styled.PostsContainer>
      </Layout>
    </TabName>
  )
}, PostsListProvider)

export { Posts }
