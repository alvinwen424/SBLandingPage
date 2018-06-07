import React, { Component} from 'react'
import { Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/Flatbutton'
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

class GridSignup extends Component {
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
    upload({
      firstName,
      lastName,
      email,
      confirmEmail
    })
    this.setState({submitted: true})
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
    let { textField, buttonText, paper, paperPaper, root, gridPaper} = this.props.classes
    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        onClick={this.handleClose}
      />,
    ]
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
              <Button onClick={this.onSubmit} className={buttonText}>
                {<span >Submit</span>}
              </Button>
            </Paper>
          </Grid>
        </Grid>
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

GridSignup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridSignup);
