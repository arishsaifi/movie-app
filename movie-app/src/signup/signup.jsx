import React from "react";
import SignupImage from "./signup-image";
import SignupForm from "./signup-form";
import Container from 'react-bootstrap/Container';



const Signup = () => {

    const main = {
        width:"100%",
        display : "flex"
    }
    const left = {
    //    width:"50%",
        float : "left",
    }
    const right = {
        width:"50%",
        float : "right"
    }

    return (
        <div style={main}>
        <SignupImage style={left}/>
        <SignupForm style={right}/>

        </div>
       
    )
}

export default Signup;

