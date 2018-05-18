import React, { Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class PreLanding extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:""
    }
  }

  onChange = (e, index, value) => {
    this.setState({email: value})
  }

  onSubmit = {
  }

  render(){
    let { email } = this.state
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
