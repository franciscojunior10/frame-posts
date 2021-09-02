import { FC, memo } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from 'pages/Home/Home'
import { RoutingPath } from 'utils/routing'

const Routes: FC = memo(() => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path={RoutingPath.HOME} />
    </BrowserRouter>
  )
})

export { Routes }
