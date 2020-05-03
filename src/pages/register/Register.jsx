import React, { Component } from 'react';
import './Register.css';
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
    const { userName } = this.state;
    this.setState({ userName: event.target.value });
    console.log(userName);
  };

  handlerUserEmail = (event) => {
    const { userEmail } = this.state;
    this.setState({ userEmail: event.target.value });
    console.log(userEmail);
  };

  handlerUserPassword = (event) => {
    const { userPassword } = this.state;
    this.setState({ userPassword: event.target.value }, () => {});
    console.log(userPassword);
  };

  registerUser = async (event) => {
    const { userName, userEmail, userPassword } = this.state;
    event.preventDefault();

    const response = await UserProvider(userName, userPassword, userEmail);

    switch (response.status) {
      case errorHandler.OK:
        console.log(response.data);
        break;

      case errorHandler.BAD_REQUEST:
        throw { message: 'Erreur de contenu' };
        break;

      default:
        console.log('Nothing');
    }
  };

  render() {
    return (
      <div className="form-input">
        <form onSubmit={this.registerUser}>
          <input onChange={this.handlerUserEmail} type="email" name="" id="input-email" />
          <input type="text" name="" id="" onChange={this.handlerUserName} />
          <input type="text" name="" id="" onChange={this.handlerUserPassword} />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}
