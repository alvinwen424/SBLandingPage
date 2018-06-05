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
    flexGrow: 1,
  },
  paperPaper: {
    flex:'1',
    textAlign: 'center',
    width: '500px',
  },
  gridPaper: {
    display: 'flex'
  },
  paper: {
    textAlign: 'center',
  },
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
    let { paper, paperPaper, root, gridPaper} = this.props.classes
    let { email, redirectToLanding } = this.state
    if(redirectToLanding){
      return <Redirect to={{pathname:"./Home", state:{email} } }/>
    }
    return(
      <div className={root}>
        <Grid container spacing={24} >
          <Grid item xs={12} className={gridPaper}>
            <Paper className={paperPaper}>
              <img className={paper} src='SBTransparent.png' width="50%" height="50%"/>
              <h1 className={paper}>StoryBox</h1>
              <p className={paper}>Enter your email to join the waitlist</p>
              <p>or</p>
              <TextField
                    className={paper}
                    value={email}
                    onChange={(this.onChange)}

                />
              <RaisedButton
                className={paper}
                label='Get Early Access'
                onClick={this.onSubmit}
                backgroundColor='#84CAEE'
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
