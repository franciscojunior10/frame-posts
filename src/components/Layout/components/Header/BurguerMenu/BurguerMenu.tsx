import { FC, Fragment, memo } from 'react'

import { useHeader } from 'hooks/header'

import { RightMenu } from './RightMenu'
import * as Styled from './styles'

const BurguerMenu: FC = memo(() => {
  const { open, toggle } = useHeader()

  return (
    <Fragment>
      <Styled.BurguerMenuContainer open={open} onClick={() => toggle()}>
        <div />
        <div />
        <div />
      </Styled.BurguerMenuContainer>
      <RightMenu open={open} />
    </Fragment>
  )
})

export { BurguerMenu }
