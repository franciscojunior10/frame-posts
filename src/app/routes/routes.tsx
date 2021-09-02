import { FC, memo } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from 'pages/Home/Home'

const Routes: FC = memo(() => {
  return (
    <BrowserRouter>
      <Route component={Home} exact />
    </BrowserRouter>
  )
})

export { Routes }
