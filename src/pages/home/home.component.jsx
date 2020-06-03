import React from 'react';
import './home.styles.css';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

function Home({ history, location }) {
  const goToRecordsPage = () => {
    history.push('/records');
  };

  console.log(location);
  return (
    <>
      <div className="home">
        <h1 className="home-title">
          <span className="home-title-span">Hello</span> {localStorage.getItem('username')}
        </h1>
        <div className="home-choice">
          <button className="btn-register-home" onClick={goToRecordsPage} type="submit">
            Creer un dossier
          </button>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Home);
