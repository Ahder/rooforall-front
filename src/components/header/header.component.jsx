import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logoRooforAll.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/home">
        ACCUEIL
      </Link>
      <Link className="option" to="/dossiers">
        MES DOSSIERS
      </Link>
      <Link className="option" to="/aboutUs">
        A PROPOS DE NOUS
      </Link>
      <Link className="option" to="/profile">
        MON PROFIL
      </Link>
    </div>
  </div>
);

export default Header;
