import { FC, Fragment } from 'react'

import { GlobalStyles } from 'styles'

import { Routes } from './routes'

const App: FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  )
}

export { App }
