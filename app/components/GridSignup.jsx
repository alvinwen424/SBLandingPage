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
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Home from './Home'
import sa from 'superagent'

const upload = (file) => {
  console.log(file)
  sa.post('/upload')
  .send(file)
  .end((err, res) => {
    if (err) console.log(err);
    console.log('response', res)
  })
}

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
  },
  dropDown: {
    background: 'white',
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
      submitted: false,
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
    let { textField, buttonText, paper, paperPaper, root, gridPaper, dropDown} = this.props.classes
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
    ]
    let disabled = (email !== confirmEmail) ? true : false

    return(
      <div className={`${root} prelanding_grid`}>
        <Grid container spacing={24} >
          <Grid item xs={12} className={gridPaper}>
            <Paper className={paperPaper}>
              <img className={paper} src='SBTransparent.png' width="50%" height="50%"/>
              <h1 className={paper}>So... What's your story?</h1>
              <p>Create, organize and store your story for the future.</p>
              <TextField
                inputStyle={{color: 'white'}}
                value={firstName}
                onChange={((e)=> this.onChange('firstName', e))}
              /><br/>
              <TextField
                inputStyle={{color: 'white'}}
                value={lastName}
                onChange={((e)=> this.onChange('lastName', e))}
              /><br />
              <TextField
                    inputStyle={{color: 'white'}}
                    value={email}
                    onChange={((e)=> this.onChange('email', e))}
                /> <br/>
              <TextField
                inputStyle={{color: 'white'}}
                value={confirmEmail}
                onChange={((e)=> this.onChange('confirmEmail', e))}
              /><br />
              {/* <DropDownMenu style={dropDown} menuItemStyle={{dropDown}} value={gender} onChange={((e, index, value)=> this.onChange('gender', e, index, value))}>
                {genders.map((eachGender, index) => {
                  return <MenuItem key={eachGender + index} value={index + 1} primaryText={eachGender}/>
                })}
              </DropDownMenu>
              <DropDownMenu value={month} onChange={((e, index, value)=> this.onChange('month', e, index, value))}>
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
            </DropDownMenu> <br/> */}
              <Button onClick={this.onSubmit} disabled={disabled} className={buttonText}>
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
