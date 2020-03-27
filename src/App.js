import React, {useState} from 'react';
import './App.css';
import SignUp from "./SignUp";
import Button from "@material-ui/core/Button";
import { usePostCallback } from "use-axios-react";


const title = 'Inscription sur RooforAll';

function userToRequest({ userName, password,   }) {
    return {
        url: "https://localhost:8080/api/users/signup",
        data: { name, job }
    };
}
function App () {
    const [username, setUserName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const signIp = (usernameInput, mailInput, password) => {
        axios
    }
    
    
    
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <div className="App">
                <SignUp defaultValue={"Enter username"}/>
                <SignUp defaultValue={"Enter email"}/>
                <SignUp defaultValue={"Enter password"}/>
                <Button variant="contained" color="primary">Default</Button>
            
            </div>
        
        
        </div>
    );
}

export default App;
