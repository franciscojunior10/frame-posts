import { FC, Fragment, memo } from 'react'

import { Header } from './components/Header'
import { LayoutProps } from './props'
import * as Styled from './styles'

const Layout: FC<LayoutProps> = memo(props => {
  const { children, titlePage } = props

  return (
    <Fragment>
      <Header />
      <Styled.MainContainer>
        <Styled.MainContent>
          <Styled.TitlePage>{titlePage}</Styled.TitlePage>
          {children}
        </Styled.MainContent>
      </Styled.MainContainer>
    </Fragment>
  )
})

export { Layout }
