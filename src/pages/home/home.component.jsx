import React from 'react';
import './home.styles.css';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { PrimaryButton } from 'office-ui-fabric-react';

function Home({ history, location }) {
  const goToRecordsPage = () => {
    history.push('/records');
  };

  const goToListRecords = () => {
    history.push('/record-list');
  };

  return (
    <>
      <div className="home">
        <h1 className="home-title">
          <span className="home-title-span">Hello</span> {localStorage.getItem('username')}
        </h1>
        <PrimaryButton
          onClick={goToListRecords}
          style={{
            background: 'white',
            border: '1px solid #00bfa6',
            borderColor: '#00bfa6',
            marginTop: '40px',
            width: '250px',
            color: '#00bfa6',
          }}
          ariaDescription="dossier"
        >
          Listes des dossiers
        </PrimaryButton>

        <PrimaryButton
          onClick={goToRecordsPage}
          style={{
            background: '#00bfa6',
            borderStyle: 'none',
            fontSize: '18px',
            marginTop: '30px',
            width: '400px',
            height: '60px',
          }}
          ariaDescription="dossier"
        >
          Creation d'un dossier
        </PrimaryButton>
        <div className="home-choice"></div>
      </div>
    </>
  );
}

Home.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(Home);
