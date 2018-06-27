import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import PreLanding from './PreLanding'
import Grid from './Grid'
import GridSignup from './GridSignup'

export default class Routes extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route path='/prelanding' component={PreLanding} />
          <Route path='/signup' component={GridSignup} />
          <Route path='/Home' component={Home} />
          <Route path='/' component={Grid} />
        </Switch>
      </div>
    )
  }
}
