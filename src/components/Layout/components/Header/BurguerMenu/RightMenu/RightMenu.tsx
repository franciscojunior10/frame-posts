import { FC, memo, useRef } from 'react'
import { useLocation } from 'react-router'
import { useClickAway } from 'react-use'

import { useHeader } from 'hooks/header'
import { RoutingPath } from 'utils/routing'

import { RightMenuProps } from './props'
import * as Styled from './styles'

const RightMenu: FC<RightMenuProps> = memo(props => {
  const { open } = props
  const { toggle } = useHeader()
  const { pathname } = useLocation()
  const ref = useRef(null)

  useClickAway(ref, () => {
    if (open) {
      toggle()
    }
  })

  return (
    <Styled.RightMenuContainer ref={ref} open={open}>
      <Styled.RightMenuItems
        to={RoutingPath.POSTS}
        active={RoutingPath.POSTS === pathname}
        onClick={() => toggle()}
      >
        posts
      </Styled.RightMenuItems>
      <Styled.RightMenuItems
        to={RoutingPath.ALBUMS}
        active={RoutingPath.HOME === pathname}
        onClick={() => toggle()}
      >
        álbuns
      </Styled.RightMenuItems>
      <Styled.RightMenuItems
        to={RoutingPath.TODOS}
        active={RoutingPath.TODOS === pathname}
        onClick={() => toggle()}
      >
        todos
      </Styled.RightMenuItems>
    </Styled.RightMenuContainer>
  )
})

export { RightMenu }
