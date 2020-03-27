import React from 'react';
import './App.css';
import Auth from './components/AuthenticationForm/Auth';
import Rooforall from './components/rooforall';

class App extends React.Component {

    render(){
        return(
            <div>
                <Rooforall />
            </div>
        )
    }
}

export default App;
