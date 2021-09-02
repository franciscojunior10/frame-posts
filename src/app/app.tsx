import { FC, Fragment } from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles'
import { theme } from 'styles/theme'

import { Routes } from './routes'

const App: FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Fragment>
  )
}

export { App }
