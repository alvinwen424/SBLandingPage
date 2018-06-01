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
    textAlign: 'center',
    width: '500px',
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
    let { classes } = this.props
    let { email, redirectToLanding } = this.state
    if(redirectToLanding){
      return <Redirect to={{pathname:"./Home", state:{email} } }/>
    }
    return(
      <div className={classes.root}>
        <Grid container spacing={24} >
          <Grid item xs={12}>
            <img className={classes.paper} src='SBTransparent.png' width="50%" height="50%"/>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.paper}>StoryBox</h1>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.paper}>Enter your email to join the waitlist</p>
          </Grid>
          <Grid item xs={6}>
              <TextField
                  className={classes.paper}
                  value={email}
                  onChange={(this.onChange)}

              />
          </Grid>
          <Grid item xd={6}>
              <RaisedButton
                className={classes.paper}
                label='Get Early Access'
                onClick={this.onSubmit}
                backgroundColor='#84CAEE'
              />
          </Grid>
          <Grid item xs={12}>
            <p className={classes.paper}>or</p>
          </Grid>
          <Grid item xs={12}>
            <RaisedButton
              className={classes.paper}
              backgroundColor='#84CAEE'
              label="Facebook"
              icon={<i className="fab fa-facebook-square"></i>}
            />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperPaper}>
              <TextField
                    className={classes.paper}
                    value={email}
                    onChange={(this.onChange)}

                />
              <RaisedButton
                className={classes.paper}
                backgroundColor='#84CAEE'
                label="Facebook"
                icon={<i className="fab fa-facebook-square"></i>}
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
