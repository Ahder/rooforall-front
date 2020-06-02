import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Landing from './pages/landing/landing.component';
import './App.css';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';

function App() {
  return (
    <div className="app-class">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
