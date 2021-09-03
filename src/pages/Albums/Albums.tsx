import { FC, useEffect } from 'react'

import { Layout } from 'components/Layout'
import { TabName } from 'components/TabName'
import { withContext } from 'utils/withContext'

import { AlbumsListProvider, useAlbumsList } from './context'
import { AlbumsProps } from './context/props'
import * as Styled from './styles'

const Albums: FC = withContext(() => {
  const { getAlbumsList, albums } = useAlbumsList()

  useEffect(() => {
    getAlbumsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TabName tabName="álbuns">
      <Layout titlePage="Álbuns">
        <Styled.AlbumsContainer>
          {albums.map((album: AlbumsProps) => (
            <div key={album.id}>
              <h2>{album.title}</h2>
              <div />
            </div>
          ))}
        </Styled.AlbumsContainer>
      </Layout>
    </TabName>
  )
}, AlbumsListProvider)

export { Albums }
