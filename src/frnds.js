import React from "react";
// import { Component } from "react";

//Basic Example fo Class Component 
//Class componet must have render()
class frnds extends React.Component{
    render(){
        console.log('this...',this)
        const{props} =this.props
    
        return (
            <>
            <h1>{props}</h1>
            </>
          
            //  params.map((i)=>{
            //     console.log(JSON.stringify(i))
            //     const{Name}=i;
            //     return <li>{Name}</li>
            // })
         
        )
        
    }
}
export default frnds