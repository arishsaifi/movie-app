import React from "react";
import logo from "./images/signup.png"
const SignupImage = () =>{
    console.log(logo)
    return(
        <>
         <img 
         style={{width:"50%"}}
         src= {logo} 
         alt="image"
         />
         
        </>
    )
}

export default SignupImage;