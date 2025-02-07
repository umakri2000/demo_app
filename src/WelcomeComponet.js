// import React from "react";
import { useContext } from "react";
import { changeName } from "./Context";
 function Welcome(){
    let member= useContext(changeName)
    console.log('name.....',member)
    
    return <>
    <h2 className="welcomeStyleHeading">Welcome,{member}</h2>
    </>
 }
 export default Welcome