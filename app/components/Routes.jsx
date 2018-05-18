import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import PreLanding from './PreLanding'

export default class Routes extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route path='/Home' component={Home} />
          <Route path='/' component={PreLanding} />
        </Switch>
      </div>
    )
  }
}
