import { FC } from 'react'

import ImageEbook from 'assets/ebook.png'
import { Button } from 'components/Button'
import { TabName } from 'components/TabName'

import * as Styled from './styles'

const Home: FC = () => {
  return (
    <TabName tabName="início">
      <Styled.Container>
        <Styled.ContentText>
          <h2>Seja bem-vindo, a frame.posts</h2>
          <h1>
            Aqui voçê encontra uma variedade enorme de posts, álbuns e muitos
            mais.
          </h1>
          <h3>Tudo isso sem pagar mensalidade</h3>
          <Button>ACESSAR</Button>
        </Styled.ContentText>
        <Styled.ContentImageEbook>
          <img src={ImageEbook} alt="Imagem Ebook" />
        </Styled.ContentImageEbook>
      </Styled.Container>
    </TabName>
  )
}

export { Home }
