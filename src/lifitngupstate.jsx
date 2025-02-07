import React from "react";
import { useState } from "react";

function ParentComponent({text}){
    console.log({text})
    return (
        <>
        <h1>Child One </h1>
        <h6>{text}</h6>
        </>
    )

}

function ChildComponent({text}){
    return (
        <>
        
        <h1>Child Two </h1>
        <h1> {text}</h1>
        </>
    )

}

function RenderComponet(){
    var [text,changefn]=useState('hi');
    // changefn('bye')
    return (
        <>
        <h1>Parnet</h1>
        <input type="text" defaultValue={text} onChange={(e)=>changefn(e.target.value) }/>
        <ParentComponent text={text}/>
        <ChildComponent  text={text}/>
        </>
    )
}
export default RenderComponet