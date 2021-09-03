import { FC, useCallback } from 'react'
import { useHistory } from 'react-router'

import ImageNotFound from 'assets/notfound.png'
import { Button } from 'components/Button'
import { TabName } from 'components/TabName'
import { RoutingPath } from 'utils/routing'

import * as Styled from './styles'

const NotFound: FC = () => {
  const { push } = useHistory()

  const handlePushPagePHome = useCallback(() => push(RoutingPath.HOME), [push])

  return (
    <TabName tabName="página não encontrada">
      <Styled.NotFoundContainer>
        <img src={ImageNotFound} alt="Imagem página não encontrada" />
        <h3>Opsss... página não encontrada</h3>
        <Button onClick={handlePushPagePHome}>VOLTAR</Button>
      </Styled.NotFoundContainer>
    </TabName>
  )
}

export { NotFound }
