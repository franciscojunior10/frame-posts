import { FC, Fragment, memo } from 'react'
import { Link } from 'react-router-dom'

import ImageLogo from 'assets/logo.svg'
import { RoutingPath } from 'utils/routing'

import { BurguerMenu } from './BurguerMenu'
import * as Styled from './styles'

const Header: FC = memo(() => {
  return (
    <Fragment>
      <Styled.HeaderContainer>
        <Styled.HeaderContent>
          <Link to={RoutingPath.HOME}>
            <img src={ImageLogo} alt=" Imagem logo" />
          </Link>
          <BurguerMenu />
        </Styled.HeaderContent>
      </Styled.HeaderContainer>
    </Fragment>
  )
})

export { Header }
