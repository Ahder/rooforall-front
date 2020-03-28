import React from "react";
import NotFound from "../ErrorPage/notFound";



 class Testshow extends React.Component{
    
    render(){
        if(this.props.isLog){
            return(
                <div className="text">
                   <div>
                       You Logged in! YES
                   </div>
                </div>
            )
        }else{
            return (<NotFound/>)
        }
        
    }
}
export default Testshow;