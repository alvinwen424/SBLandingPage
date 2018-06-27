import React, { Component} from 'react'
import { Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

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
    //responsive phone css 0px to sm(600px)
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    }
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
      return <Redirect to={{pathname:"./signup", state:{email} } }/>
    }
    return(
      <div className={`${root} prelanding_grid`}>
        <Grid container spacing={24} >
          <Grid item xs={12} className={gridPaper}>
            <Paper className={paperPaper}>
              <img className={paper} src='SBTransparent.png' width="50%" height="50%"/>
              <h1 className={paper}>Storybox</h1>
              <p className={paper}>Fun & easy way to save your </p>
              <p className={paper}>memories for your loved ones in the future</p>
              <TextField
                    inputStyle={{color: 'white'}}
                    // className={textField}
                    value={email}
                    onChange={(this.onChange)}

                /> <br/>
              <Button onClick={this.onSubmit} className={buttonText}>
                {<span >Get Early Access</span>}
              </Button>
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
