import { FC, memo } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from 'pages/Home/Home'
import { Posts } from 'pages/Posts'
import { RoutingPath } from 'utils/routing'

const Routes: FC = memo(() => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path={RoutingPath.HOME} />
      <Route component={Posts} exact path={RoutingPath.POSTS} />
    </BrowserRouter>
  )
})

export { Routes }
