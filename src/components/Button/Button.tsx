import { FC, memo } from 'react'

import { ButtonProps } from './props'
import * as Styled from './styles'

const Button: FC<ButtonProps> = memo(props => {
  const { children } = props

  return <Styled.Button type="button">{children}</Styled.Button>
})

export { Button }
