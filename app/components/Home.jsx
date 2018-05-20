import React, { Component } from 'react'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/Flatbutton'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      month:1,
      day:1,
      year:1,
      gender:1,
      firstName:"First Name",
      lastName:"Last Name",
      email:"Email",
      confirmEmail:"Confirm email",
      submitted: false
    }
  }

  componentDidMount() {
    this.setState({email: this.props.location.state.email})
  }


  onSubmit = () => {
    const {firstName, lastName, email, confirmEmail} = this.state
    axios.post('/upload', {
      firstName,
      lastName,
      email,
      confirmEmail
    })
    .then(res => {
      console.log(res)
      this.setState({submitted: true})
    })
    .catch(err => {
      console.log(err)
    })
  }

  onChange = (type, e, index, value) => {
    e.preventDefault()
    if(type == 'firstName' || type == 'lastName' || type == 'email' || type == 'confirmEmail'){
      this.setState({[type]: e.target.value})
    }else{
      this.setState({[type]: value})
    }
  }

  handleClose = () => {
    this.setState({submitted: false})
  }

  render(){
    const {firstName, lastName, email, confirmEmail, month, day, year, gender, submitted} = this.state
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const genders = ['Male','Female']
    const days = []
    const years = []
    for(var i = 1; i <= 31; i++){
      days.push(i)
    }
    for(var i= 1960; i <=(new Date()).getFullYear(); i++){
      years.push(i)
    }
    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div className="signup-form">
        <img className='logo' src="Storybox_3.jpg" />
        <h1>So... What's your story?</h1>
        <p>Create, organize and store your story for the future.</p>
        <div className="form">
          <TextField
            className='form-textbox'
            value={firstName}
            onChange={((e)=> this.onChange('firstName', e))}
          />
          <TextField
            className='form-textbox'
            value={lastName}
            onChange={((e)=> this.onChange('lastName', e))}
          /><br />
          <TextField
            className='form-textbox'
            value={email}
            onChange={((e)=> this.onChange('email', e))}
          />
          <TextField
            className='form-textbox'
            value={confirmEmail}
            onChange={((e)=> this.onChange('confirmEmail', e))}
          /><br />
          <DropDownMenu className='dropDown' value={gender} onChange={((e, index, value)=> this.onChange('gender', e, index, value))}>
            {genders.map((eachGender, index) => {
              return <MenuItem key={eachGender + index} value={index + 1} primaryText={eachGender} />
            })}
          </DropDownMenu>
          <DropDownMenu className='dropDown' value={month} onChange={((e, index, value)=> this.onChange('month', e, index, value))}>
            {months.map((eachMonth, index) => {
              return <MenuItem key={eachMonth + index} value={index + 1} primaryText={eachMonth} />
            })}
          </DropDownMenu>
          <DropDownMenu className='dropDown' value={day} onChange={((e, index, value)=> this.onChange('day', e, index, value))}>
            {days.map((eachDay, index) => {
              return <MenuItem key={eachDay + index} value={index + 1} primaryText={eachDay} />
            })}
          </DropDownMenu>
          <DropDownMenu className='dropDown' value={year} onChange={((e, index, value)=> this.onChange('year', e, index, value))}>
            {years.map((eachYear, index) => {
              return <MenuItem key={eachYear + index} value={index + 1} primaryText={eachYear} />
            })}
          </DropDownMenu>
        </div>
        <RaisedButton
          className='submitButton'
          label='submit'
          onClick={this.onSubmit}
          backgroundColor='#84CAEE'
        />
        <Dialog
          title='Thank you for signing up!'
          open={submitted}
          actions={actions}
          onRequestClose={this.handleClose}
        >
          Thank you {firstName} for registering for our community pool, you will be one of the first people to recieve an invitation to our beta! See you soon!
        </Dialog>
      </div>
    )
  }
}
