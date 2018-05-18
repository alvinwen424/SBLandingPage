import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Navbar from './components/Navbar'
import Routes from './components/Routes'
render(
  <Provider>
    <Router>
      <div>
        <MuiThemeProvider>
          <Navbar />
          <Routes />
        </MuiThemeProvider>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
