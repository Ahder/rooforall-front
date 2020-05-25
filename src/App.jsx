import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Home from './pages/home/home.component';
import './App.css';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="app-class">
      <Header />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
