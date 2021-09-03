import { FC, memo } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Albums } from 'pages/Albums'
import { Home } from 'pages/Home/Home'
import { Posts } from 'pages/Posts'
import { Todos } from 'pages/Todos'
import { RoutingPath } from 'utils/routing'

const Routes: FC = memo(() => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path={RoutingPath.HOME} />
      <Route component={Posts} path={RoutingPath.POSTS} />
      <Route component={Albums} path={RoutingPath.ALBUMS} />
      <Route component={Todos} path={RoutingPath.TODOS} />
    </BrowserRouter>
  )
})

export { Routes }
