import React, { useImperativeHandle } from "react";
function ChildImperative({reference}){
    console.log(reference);
    let x=reference

    useImperativeHandle(reference,()=>({
        focus:()=>{
            // reference.current.focus();
            // reference.current.style.background='red'
        },
    }))
    return <>
    <div>{x.current?.value}</div>
    </>
}
export default ChildImperative