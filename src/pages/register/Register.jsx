import React, { Component } from 'react';
import './Register.scss';
import logo from '../../assets/images/registerSplash.svg';
import UserProvider from '../../providers/api/users/UserProvider';

const errorHandler = require('./register-utils');

export default class Register extends Component {
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
    const { userName, userEmail, userPassword } = this.state;
    event.preventDefault();

    const response = await UserProvider(userName, userPassword, userEmail);

    switch (response.status) {
      case errorHandler.OK:
        break;

      case errorHandler.BAD_REQUEST:
        break;

      default:
    }
  };

  render() {
    const titleRegister = " Je m'inscris";
    return (
      <>
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <form onSubmit={this.registerUser}>
                  <div className="all-input">
                    <h2>
                      Bienvenue sur <span className="title-color">RooforAll</span>
                    </h2>
                    <input
                      placeHolder="Entrez votre adresse mail"
                      onChange={this.handlerUserEmail}
                      type="text"
                      name="email"
                      id="email-input"
                    />

                    <input
                      placeHolder="Entrez votre nom d'utilisateur"
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
                    <a href="gg">Vous avez déjà un compte?</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="column">
              <div className="green-column">
                <div className="register-logo">
                  <img src={logo} alt="register-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
