import React, { Component } from 'react';
import './Register.scss';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { register } from '../../providers/api/users/UserProvider';

const errorHandler = require('./register-utils');

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
    };
  }

  handlerUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  handlerUserEmail = (event) => {
    this.setState({ userEmail: event.target.value });
  };

  handlerUserPassword = (event) => {
    this.setState({ userPassword: event.target.value }, () => {});
  };

  registerUser = async (event) => {
    const { history } = this.props;
    const { userName, userEmail, userPassword } = this.state;
    event.preventDefault();

    const user = await register(userName, userPassword, userEmail);
    console.log(user.username);
    console.log(this.props);
    history.push('/home', user.username);
  };

  render() {
    const titleRegister = " Je m'inscris";
    return (
      <>
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <form className="form" onSubmit={this.registerUser}>
                  <div className="all-input">
                    <h2>
                      Bienvenue sur
                      <span className="title-color"> RooforAll</span>
                    </h2>
                    <input
                      placeholder="Entrez votre adresse mail"
                      onChange={this.handlerUserEmail}
                      type="text"
                      name="email"
                      id="email-input"
                    />

                    <input
                      placeholder="Entrez votre nom d'utilisateur"
                      type="text"
                      name=""
                      id=""
                      onChange={this.handlerUserName}
                    />
                    <input
                      placeholder="Entrez votre mot de passe"
                      type="text"
                      name=""
                      id="password-input"
                      onChange={this.handlerUserPassword}
                    />
                  </div>
                  <button className="btn-register" type="submit">
                    {titleRegister}
                  </button>
                  <div className="btn-login">
                    <Link to="/login">Vous avez deja un compte?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Register.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Register);
