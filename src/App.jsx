import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Landing from './pages/landing/landing.component';
import './App.css';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';
import Records from './pages/records/records.component';
import { getToken } from './providers/api/users/UserProvider';
import RecordList from './components/record-list/record-list.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    console.log('Mount');
    this.setState({ token: getToken() });
  }

  logout = () => {
    this.setState((prevState) => {
      localStorage.removeItem('token');
      console.log(`OLD TOKEN ${localStorage.getItem('token')} `);
      console.log(this.state.token);
    });
  };

  componentWillMount(): void {
    console.log('Unmount');
  }

  render() {
    console.log('render');
    console.log('App principal');
    const { token } = this.state;
    return (
      <div className="app-class">
        <Header isLogged={token} handleLogOut={this.logout} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/records" component={Records} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/record-list" component={RecordList} />
        </Switch>
      </div>
    );
  }
}

export default App;
