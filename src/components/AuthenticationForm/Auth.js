import React from "react";
import Signin from "../AuthenticationForm/SignIn/SignIn";
import {  } from "module";
import "./Auth.css";
import HeaderComponent from '../HeaderComponent/HeaderComponent';




export default class Auth extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        
        return(
            <div className="Auth">
                <div className="Background">
                    <Signin/>
                </div>
            </div>
        )
    }
}