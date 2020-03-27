import Input from "@material-ui/core/Input";
import React from "react";

function SignUp (props) {
    
    return (
        <Input
            defaultValue={props.defaultValue}
            inputProps={{'aria-label': 'description'
            }}
        onChange={props.inputHandler}
        />
    );
}

export default SignUp;
