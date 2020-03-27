import React from "react";
import {Redirect, Link} from "react-router-dom";


export default class NotFound extends React.Component {

    render(){
  
      return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404 Sorry :( </h1>
                </div>
                <p>Sorry but the page you are looking for you need to log before</p>
                <Link to="/">Go To Homepage</Link>
            </div>
        </div>
      );
    }
      
  }