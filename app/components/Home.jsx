import React, { Component } from 'react'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

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
      confirmEmail:"Confirm email"

    }
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

  render(){
    const {firstName, lastName, email, confirmEmail, month, day, year, gender} = this.state
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = []
    const years = []
    for(var i = 1; i <= 31; i++){
      days.push(i)
    }
    for(var i= 1960; i <=(new Date()).getFullYear(); i++){
      years.push(i)
    }
    console.log(lastName, firstName, email, confirmEmail)
    return (
      <div className="signup-form">
        <div className="logo" >
          <img src="Storybox_1.jpg" width="100px" height="100px"/>
        </div>
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
          <DropDownMenu value={gender} onChange={((e, index, value)=> this.onChange('gender', e, index, value))}>
            <MenuItem value='1' primaryText="Male" />
            <MenuItem value='2' primaryText="Female" />
          </DropDownMenu><br />
          <DropDownMenu  value={month} onChange={((e, index, value)=> this.onChange('month', e, index, value))}>
            {months.map((eachMonth, index) => {
              return <MenuItem key={eachMonth + index} value={index + 1} primaryText={eachMonth} />
            })}
          </DropDownMenu>
          <DropDownMenu value={day} onChange={((e, index, value)=> this.onChange('day', e, index, value))}>
            {days.map((eachDay, index) => {
              return <MenuItem key={eachDay + index} value={index + 1} primaryText={eachDay} />
            })}
          </DropDownMenu>
          <DropDownMenu value={year} onChange={((e, index, value)=> this.onChange('year', e, index, value))}>
            {years.map((eachYear, index) => {
              return <MenuItem key={eachYear + index} value={index + 1} primaryText={eachYear} />
            })}
          </DropDownMenu>
        </div>
        <RaisedButton
          label='submit'
          backgroundColor='#84CAEE'
          onClick={this.onSubmit}
        />
      </div>
    )
  }
}
