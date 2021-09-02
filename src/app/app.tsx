import { FC, Fragment } from 'react'

import { AppProvider } from 'hooks'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles'
import { theme } from 'styles/theme'

import { Routes } from './routes'

const App: FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export { App }
