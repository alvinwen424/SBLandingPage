import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from './components/Home'
import Navbar from './components/Navbar'
render(
  <Provider>
    <Router>
      <div>
        <MuiThemeProvider>
          <Navbar />
          <Home />
        </MuiThemeProvider>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
