import React, { memo } from "react";
 function CardStyle(prop){
    console.log('cardComponent Calls')
    return (
        <>
         
        <div className="namecard pad_10 roboto-regular f_15">
        <span className=" inline_block ">Type your name :</span>
            <input type="text" className="cardInput" /> 
            <span className="button tmar_10 inline_block" onClick={prop.getfn} >+</span>
        </div>
        </>

    )
 }
 export default memo(CardStyle)