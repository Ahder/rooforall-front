import React, {useState} from "react";
import {useAuth} from "react-use-auth";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthenticationService from "../../../Service/AuthenticationService";
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import Testshow from '../../TestShow/Testshow';



const API_URL = 'http://localhost:8081';



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://google.com/">
          Roof For All
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  
  export default function SignIn(props) {
    const classes = useStyles();
    let history = useHistory();

    const [isLogged, setisLogged] = useState(true);
    const [username, setUsername]  = useState("oussama");
    const [password, setPassword]  = useState("oussama");
    const [hasLoginFailed, sethasLoginFailed]  = useState(false);
    const [showSuccessMessage, setshowSuccessMessage]  = useState(false);


    const handleChangeUsername = (event) => {
      setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
      setPassword(event.target.value)
    }
    
    const loginClicked = async () => {
      let isConnected  = await AuthenticationService.executeJwtAuthenticationService(username, password) || false;
      console.log(username+" "+password);
      console.log("===> isConnected is "+isConnected);
      //setisLogged(isConnected)
      props.handleLog(isConnected);
      return isConnected ? setisLogged(true) : setisLogged(false) ;

    }

    const renderRedirect = () => {
      
      if (isLogged === true) {
        console.log("logged");
        history.push("/testshow");
      }else {
        console.log("Not logged");
        return null;
      }
    }
    
    
    return (
        <div className="Signin">
            <Container className="container" component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              
              <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
              </Avatar>

              <Typography component="h1" variant="h5">
                  Sign in
              </Typography>
              <div>
                {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {showSuccessMessage && <div>Login Sucessful</div>}
              </div>
            

              <form className={classes.form} noValidate>

                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="text"
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleChangeUsername}
                  />
                  


                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChangePassword}

                  />


                  <Button
                    //type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => {
                      loginClicked();
                      renderRedirect();
                    }}
                  >
                  Sign In
                  </Button>
                  <Grid container>
                  <Grid item>
                      <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                      </Link>
                  </Grid>
                  </Grid>
              </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
        </div>
    );
  }