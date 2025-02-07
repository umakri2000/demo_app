import React from "react";
import { Component } from "react";
// import LoginFun from "./login";

 class evntEg extends React.Component{
    constructor(props){
        super(props);
        console.log(JSON.stringify(props));
        this.state={
            'name':'Umkaris'
        }
    }
     getEvent(getThis){
        
    
    }
 
    render(){
        console.log(this.props);
        console.log(this.getEvent)
        return <button className="cs-btn" onClick={this.getEvent.bind(this)}>Click ME </button>
       
       
        
        
        
    }
    

 }
 export default evntEg