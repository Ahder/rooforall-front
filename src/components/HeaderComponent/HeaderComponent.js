import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthenticationService from '../../Service/AuthenticationService';

class HeaderComponent extends React.Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">LOGO</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/home">Home</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/testshow">testshow</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default (HeaderComponent)