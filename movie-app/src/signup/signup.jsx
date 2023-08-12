import React from "react";
import SignupImage from "./signup-image";
import SignupForm from "./signup-form";


const Signup = () => {

    const main = {
        width:"100%",
        display : "flex"
    }
    const left = {
       width:"50%",
        float : "left",
    }
    const right = {
        width:"50%",
        float : "right"
    }

    return (
        <div style={main}>
       <div> <SignupImage style={left}/></div>
        <div><SignupForm style={right}/></div>

        </div>
       
    )
}

export default Signup;

