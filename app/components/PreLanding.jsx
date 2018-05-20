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
      <div>
        <img src='Storybox_3.jpg' width="50%" height="50%"/>
        <TextField
            className='form-textbox'
            value={email}
            onChange={(this.onChange)}
        />
        <RaisedButton
          label='submit'
          backgroundColor='#84CAEE'
          onClick={this.onSubmit}
        />
      </div>
    )
  }
}
