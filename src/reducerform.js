import React from "react";
import { useReducer } from "react";
 function reducefn(state,action){
    console.log(action);
    switch (action.type){
        case "Name":
            state.Name=action.val
           return  state
           
           case "Address":
            state.Address=action.val
           return state;
           case "Gender":
            state.Gender=action.val
           return state;
           default :
           throw Error("invalid Actions")
    }

 }
function ReducerForm(){
    let init={
        "Name":'',
        "Address":'',
        "Gender":''
    }
    let [state,dispatch]=useReducer(reducefn,init);
    console.log(state)
function handleInput(e){
    console.log(e.target.name);
    dispatch({
        type:e.target.name,
        val:e.target.value
    })




}

    return (
        <>
        
        <form>
            
            <div className="formParent border-rad-4 lmar-10 rmar-10 tmar_10 inline_block ">
            <svg xmlns="http://www.w3.org/2000/svg" className="pull_right cur saveClickForm"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#777"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>
            <div className="block pad_10 ">
            <label for="name" className="rmar-10 roboto-regular f_15">
                Name
            </label>
            <input type="text" className="roboto-medium" name="Name" onChange={(handleInput)}/>
            </div>
            <div className="block pad_10 ">
            <label for="Address" className="rmar-10 roboto-regular f_15 ">
                Address
            </label>
            <input type="text" className="roboto-medium" name="Address"   onChange={(handleInput)}/>
            </div>
            <div className="block pad_10 ">
              <span className="rmar-10 roboto-regular f_15 ">Select Gender</span>  
            <input type="radio" id='male' name="Gender" value='M' onChange={(handleInput)}/>
            <label for="male" className="rmar-10 roboto-regular ">Male</label>
               
            <input type="radio" id='female' name="Gender" value="f" onChange={(handleInput)}/>
            <label for="female"className="rmar-10 roboto-regular ">
            Female
            </label>
            
            </div>
            </div>
        </form>
        </>
    )
}
export default ReducerForm