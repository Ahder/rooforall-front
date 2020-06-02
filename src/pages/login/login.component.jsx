import React, { Component } from 'react';
import './login.styles.scss';
import { withRouter } from 'react-router-dom';
import { login } from '../../providers/api/users/UserProvider';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
    };
  }

  handlerUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  handlerUserPassword = (event) => {
    this.setState({ userPassword: event.target.value }, () => {});
  };

  loginUser = async (event) => {
    const { history } = this.props;
    const { userName, userPassword } = this.state;
    event.preventDefault();
    console.log(userName, userPassword);
    const response = await login(userName, userPassword);
    console.log(response.data);
    console.log(this.props);
    history.push('/home', response.data.username);
  };

  render() {
    const titleLogin = ' Je me connecte';
    return (
      <>
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column">
                <form onSubmit={this.loginUser}>
                  <div className="all-input">
                    <h2>
                      Connectez-vous
                      <span className="title-color"> RooforAll</span>
                    </h2>
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
                    {titleLogin}
                  </button>
                  <div className="btn-login">
                    <a href="gg">Vous avez déjà un compte?</a>
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

export default withRouter(Login);
