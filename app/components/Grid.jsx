import React, { Component} from 'react'
import { Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Home from './Home'

const styles = theme => ({
  root: {
    // background: `url(${Image})`,
    flexGrow: 1,
  },
  paperPaper: {
    flex:'1',
    textAlign: 'center',
    maxWidth: '50%',
    margin: '20px',
    padding: '5px',
    backgroundColor: 'transparent',
  },
  gridPaper: {
    display: 'flex'
  },
  paper: {
    textAlign: 'center',
  },
  buttonText: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  textField: {
    color: 'white',
  }
});

class PreLanding extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:"Enter email here",
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
    let { textField, buttonText, paper, paperPaper, root, gridPaper} = this.props.classes
    let { email, redirectToLanding } = this.state
    if(redirectToLanding){
      return <Redirect to={{pathname:"./Home", state:{email} } }/>
    }
    return(
      <div className={`${root} prelanding_grid`}>
        <Grid container spacing={24} >
          <Grid item xs={12} className={gridPaper}>
            <Paper className={paperPaper}>
              <img className={paper} src='SBTransparent.png' width="50%" height="50%"/>
              <h1 className={paper}>StoryBox</h1>
              <p className={paper}>Enter your email to join our waitlist!</p>
              <TextField
                    inputStyle={{color: 'white'}}
                    // className={textField}
                    value={email}
                    onChange={(this.onChange)}

                /> <br/>
              <RaisedButton
                // className={paper}
                label={<span className={buttonText}>Get Early Access</span>}
                onClick={this.onSubmit}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

PreLanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreLanding);
