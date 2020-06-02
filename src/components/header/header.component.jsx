import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logoRooforAll.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" alt="home" src={logo} />
    </Link>
    <span>RooforAll</span>

    <h3>Je choisi où j'habite</h3>
    <h4>Premiere agence de logement pour etudiants etrangers</h4>

    <div className="options">
      <Link className="option" to="/home" />
      <Link className="option" to="/dossiers">
        Contacts
      </Link>
      <Link className="option" to="/aboutUs">
        Connexion
      </Link>
      <Link className="option" to="/register">
        Inscription
      </Link>
    </div>
  </div>
);

export default Header;
