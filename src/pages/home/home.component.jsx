import React from 'react';
import './home.styles.css';
function Home({ location }) {
  console.log(location);
  return (
    <div className="home">
      <h1>
        <span className="home-title">Hello</span> {location.state}
      </h1>
    </div>
  );
}

export default Home;
