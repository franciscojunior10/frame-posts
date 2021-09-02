import { FC, memo } from 'react'

import { HeaderProvider } from './header'

const AppProvider: FC = memo(props => {
  const { children } = props

  return <HeaderProvider>{children}</HeaderProvider>
})

export { AppProvider }
