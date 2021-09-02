import { FC, memo } from 'react'

import { ButtonProps } from './props'
import * as Styled from './styles'

const Button: FC<ButtonProps> = memo(props => {
  const { children, ...rest } = props

  return (
    <Styled.Button type="button" {...rest}>
      {children}
    </Styled.Button>
  )
})

export { Button }
