import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logoRooforAll.svg';
import './header.styles.scss';

const Header = ({ isLogged, handleLogOut }) => {
  console.log('HEADER');
  return (
    <div className="header">
      <img className="logo-container" alt="home" src={logo} />
      <span>RooforAll</span>

      <h3>Je choisi où j'habite</h3>
      <h4>Premiere agence de logement pour etudiants etrangers</h4>

      <div className="options">
        {isLogged ? (
          <Link className="option" to="/records">
            Dossiers
          </Link>
        ) : (
          <></>
        )}
        {isLogged ? (
          <Link className="option" to="/login">
            Connexion
          </Link>
        ) : (
          <Link className="option" to="/" onClick={handleLogOut}>
            Deconnexion
          </Link>
        )}
        <Link className="option" to="/register">
          Inscription
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.string.isRequired,
};
export default Header;
