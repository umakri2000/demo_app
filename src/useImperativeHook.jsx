import {React,useRef, useState} from "react";
import ChildImperative from './imperativechild'
// import { useRef } from "react";
function UseImperativeParent(){
    let refVal=useRef()
    var  [val,setInputValue]=useState()
    var valueChange=(event)=>{
        setInputValue(event.target.value);
    }

    return <>
    <ChildImperative reference={refVal}/>
    <input type="text" ref={refVal} onChange={valueChange}/>
    <h1>{val}</h1>

    </>
}
export default UseImperativeParent
