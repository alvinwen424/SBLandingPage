import React, { Component} from 'react'
import { Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import withWidth from '@material-ui/core/withWidth'

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
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      fontFamily: 'museo-sans, sans-serif',
      fontStyle: 'normal',
      fontWeight: '100',
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
  //phone style is used when withWidth's response is 'sm'
  phone: {
    flex:'1',
    textAlign: 'center',
    maxWidth: '50%',
    margin: '20px',
    padding: '5px',
    backgroundColor: 'transparent',
    minWidth: '100%',
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
  onClick = () => {
    this.setState({email: ""})
  }
  render(){
    let { textField, buttonText, paper, paperPaper, root, gridPaper, phone} = this.props.classes
    let { email, redirectToLanding } = this.state
    const phoneSize = (this.props.width == 'sm') ? phone : paperPaper
    if(redirectToLanding){
      return <Redirect to={{pathname:"./signup", state:{email} } }/>
    }
    return(
      <div className={`${root} prelanding_grid`}>
        <Grid container spacing={24} >
          <Grid item xs={12} className={gridPaper}>
            <Paper className={`${phoneSize} prelanding_paper`}>
              <img className={paper} src='SBTransparent.png' width="295px" height="288px"/>
              <h1 className={paper}>Storybox</h1>
              <p className={paper}>Fun & easy way to save your memories</p>
              <p className={paper}>to your family and friends in the future</p>
              <TextField
                    inputStyle={{color: 'white'}}
                    // className={textField}
                    hintText="Hint Text"
                    floatingLabelText="Email"
                    floatingLabelFixed={true}
                    value={email}
                    onChange={(this.onChange)}
                    onClick={this.onClick}
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
  width: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const landing = withStyles(styles)(PreLanding)
export default withWidth()(landing);
