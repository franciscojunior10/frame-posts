import { FC } from 'react'

import { Layout } from 'components/Layout'
import { TabName } from 'components/TabName'

import * as Styled from './styles'

const Posts: FC = () => {
  return (
    <TabName tabName="posts">
      <Layout titlePage="Posts">
        <Styled.Container>
          <h1>Post</h1>
        </Styled.Container>
      </Layout>
    </TabName>
  )
}

export { Posts }
