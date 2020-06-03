import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logoRooforAll.svg';
import './header.styles.scss';

const Header = ({ hidden, handleLogOut }) => {
  console.log('HEADER');
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo-container" alt="home" src={logo} />
      </Link>
      <span>RooforAll</span>

      <h3>Je choisi où j'habite</h3>
      <h4>Premiere agence de logement pour etudiants etrangers</h4>

      <div className="options">
        <Link className="option" to="/dossiers">
          Contacts
        </Link>
        {!hidden ? (
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
  hidden: PropTypes.string.isRequired,
};
export default Header;
