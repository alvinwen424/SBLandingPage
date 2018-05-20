import React, { Component} from 'react'
import { Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Home from './Home'

export default class PreLanding extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      redirectToLanding: false
    }
  }

  onChange = (e) => {
    this.setState({email: e.target.value})
  }

  onSubmit = () => {
    this.setState({redirectToLanding: true})
  }

  render(){
    let { email, redirectToLanding } = this.state
    if(redirectToLanding){
      return <Redirect to={{pathname:"./Home", state:{email} } }/>
    }
    return(
      <div className='prelandingPage'>
        <img src='Storybox_3.jpg' width="50%" height="50%"/>
        <p>Enter your email to join the waitlist</p>
        <div>
          <TextField
              className='form-textbox'
              value={email}
              onChange={(this.onChange)}
          />
          <RaisedButton
            className='submitButton'
            label='submit'
            onClick={this.onSubmit}
            backgroundColor='#84CAEE'
          />
        </div>
        <p>or</p>
        <RaisedButton
          backgroundColor='#84CAEE'
          label="Facebook"
          icon={<i class="fab fa-facebook-square"></i>}
        />
      </div>
    )
  }
}
