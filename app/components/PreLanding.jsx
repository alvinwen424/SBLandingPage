import React, { Component} from 'react'
import { Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles'

import PropTypes from "prop-types"
import Home from './Home'

const styles = theme => ({
  root: {
    // background: `url(${Image})`,
    flexGrow: 1,
    fontFamily: 'museo-sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: '100',
  },
  paperPaper: {
    flex:'1',
    textAlign: 'center',
    maxWidth: '50%',
    margin: '20px',
    padding: '5px',
    backgroundColor: 'transparent',
    //responsive phone css 0px to sm(600px)
  },
  gridPaper: {
    display: 'flex'
  },
  paper: {
    textAlign: 'center',
  },
  buttonText: {
    background: 'linear-gradient(45deg, #83CAEE 30%, #0074D0 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(55, 88, 241, 0.3)',
  },
  textField: {
    color: 'white',
  },
  phone: {
    minWidth: '100%',
  }
});

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
    console.log('width', this.props.width)
    const phoneSize = (this.props.width == 'sm') ? this.props.classes.phone : this.props.classes.root
    let { email, redirectToLanding } = this.state
    if(redirectToLanding){
      return <Redirect to={{pathname:"./Home", state:{email} } }/>
    }
    return(
      <div className={phoneSize}>
        <img src='SBTransparent.png' width="25%" height="25%"/>
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

PreLanding.propTypes = {
  width: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};

const landing = withStyles(styles)(PreLanding)
export default withWidth()(landing)
