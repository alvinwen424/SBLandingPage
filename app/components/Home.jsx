import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      month:"Month",
      day:"Day",
      year:"year"
    }
  }

  render(){
    const {month, day, year} = this.state
    return (
      <div>
        <TextField
          hintText="First Name"
        />
        <TextField
          hintText="Last Name"
        /><br />
        <TextField
          hintText="Email"
        /><br />
        <DropDownMenu value={month} onChange={this.onChange}>
          <MenuItem  />
        </DropDownMenu>
        <DropDownMenu value={day} onChange={this.onChange}>
          <MenuItem  />
        </DropDownMenu>
        <DropDownMenu value={year} onChange={this.onChange}>
          <MenuItem  />
        </DropDownMenu>
      </div>
    )
  }
}
