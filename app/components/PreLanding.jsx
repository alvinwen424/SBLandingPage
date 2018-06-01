import React, { Component} from 'react'
import { Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from "prop-types"
import Home from './Home'

class PreLanding extends Component {
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
    console.log('props', this.props.classes)
    let { email, redirectToLanding } = this.state
    if(redirectToLanding){
      return <Redirect to={{pathname:"./Home", state:{email} } }/>
    }
    return(
      <div className='prelandingPage'>
        <img src='SBTransparent.png' width="50%" height="50%"/>
        <h1 className="prelandingPage-Story">StoryBox</h1>
        <p>Enter your email to join the waitlist</p>
        <div id='emailSubmit'>
          <TextField
              className='form-textbox'
              value={email}
              onChange={(this.onChange)}

          />
          <RaisedButton
            className='submitButton'
            label='Get Early Access'
            onClick={this.onSubmit}
            backgroundColor='#84CAEE'
          />
        </div>
        <p>or</p>
        <RaisedButton
          backgroundColor='#84CAEE'
          label="Facebook"
          icon={<i className="fab fa-facebook-square"></i>}
        />
      </div>
    )
  }
}

export default (PreLanding)
