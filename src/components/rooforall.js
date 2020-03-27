import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HeaderComponent from './HeaderComponent/HeaderComponent';
import SignIn from './AuthenticationForm/SignIn/SignIn';
import "./rooforall.css";
import LogoutComponent from "./AuthenticationForm/Logout/Logout";
import Testshow from "./TestShow/Testshow";
import AuthenticationService from '../Service/AuthenticationService';
import HomePage from './Home/homePage';



function Showtest() {
    if(AuthenticationService.isUserLoggedIn()){
        return (
            <Router>
                <Switch>
                    <Route path="/testshow" exact component={Testshow} />
                </Switch>
            </Router>
        );
    }       
}

class AuthenticatedRoute extends React.Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }

    }
}

class Rooforall extends React.Component {

    constructor(props){
    super(props);
    this.state={
      redirect: false,
    }
  }

    render(){
        return(
            <div className="Background">

                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={SignIn} />
                        <Route path="/home" exact component={HomePage} />
                        <Route path="/login" exact component={SignIn} />
                        <Route path="/testshow" exact component={Testshow} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Rooforall;
