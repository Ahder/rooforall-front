import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import Directory from '../../components/directory/directory.component';

import './home.styles.css';
const Home = ({ location }) => {
  return (
    <>
      <div className="homepage">
        <Directory />
        <h1 style={{ color: 'red' }}>Bienvenue {location.state}</h1>
      </div>
    </>
  );
};

export default Home;
