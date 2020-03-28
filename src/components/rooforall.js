import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import SignIn from './AuthenticationForm/SignIn/SignIn';
import "./rooforall.css";
import LogoutComponent from "./AuthenticationForm/Logout/Logout";
import Testshow from "./TestShow/Testshow";
import AuthenticationService from '../Service/AuthenticationService';
import HomePage from './Home/homePage';
import NotFound from './ErrorPage/notFound';



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

function Rooforall (){

    const [isLog, setLog] = useState(false);

    return(
        <div className="Background">
            <Router>
                <HeaderComponent isLog = {isLog}/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    
                    <Route path="/signin" exact >
                        <SignIn handleLog={setLog} />
                    </Route>

                    <Route path="/testshow" exact>
                        <Testshow isLog={isLog}/>
                    </Route>
                    <Route path="/logout" exact component={LogoutComponent}/>

                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default Rooforall;
