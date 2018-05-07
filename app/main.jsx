import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Home'

render(
  <Provider>
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
