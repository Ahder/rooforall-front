import React, {useState} from 'react';
import './App.css';
import SignUp from "./SignUp";
import Button from "@material-ui/core/Button";
import axios from 'axios';


const title = 'Inscription sur RooforAll';
const url = "http:localhost:8080/api/users/signUp";

function App () {
    const [username, setUserName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const data = {};
    
    
    const handlerUserName = (e) => {
        setUserName(e.target.value);
        console.log(e.tar.name);
    }
    
    const handlerUsMail = (e) => {
        setMail(e.target.value);
        console.log(e.tar.name);
        
    }
    
    const handlerPwd = (e) => {
        setPassword(e.target.value);
        console.log(e.target.name);
        
    }
    
    
    const signUp = (usernameInput, mailInput, password) => {
        axios.post(url,)
        
    }
    
    
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <div className="App">
                <SignUp defaultValue={"Enter username"}
                        inputHandler={(e) => handlerUserName(e)}
                />
                <SignUp defaultValue={"Enter email"} inputHandler={(e) => handlerUsMail(e)}
                />
                <SignUp defaultValue={"Enter password"} inputHandler={(e) => handlerPwd(e)}
                />
                <Button onClick={signUp} variant="contained" color="primary">Default</Button>
            
            </div>
        
        
        </div>
    );
}

export default App;
