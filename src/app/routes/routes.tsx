import { FC, memo } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Albums } from 'pages/Albums'
import { Home } from 'pages/Home/Home'
import { NotFound } from 'pages/NotFound'
import { Posts } from 'pages/Posts'
import { Todos } from 'pages/Todos'
import { RoutingPath } from 'utils/routing'

const Routes: FC = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path={RoutingPath.HOME} />
        <Route component={Posts} exact path={RoutingPath.POSTS} />
        <Route component={Albums} exact path={RoutingPath.ALBUMS} />
        <Route component={Todos} exact path={RoutingPath.TODOS} />
        <Route component={NotFound} exact path="*" />
      </Switch>
    </BrowserRouter>
  )
})

export { Routes }
