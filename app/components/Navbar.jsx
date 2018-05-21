import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'

export default class NavBar extends Component {
  render(){
    return(
      <div >
        <AppBar
          className='navBar'
          style={{backgroundColor: '#066FA6' }}
          title="StoryBox"
          iconElementLeft ={<Avatar src="SBTransparent.png"></Avatar>}
        />
      </div>
    )
  }
}
