import { useReducer } from "react";
import React from "react";

function counterfn(state,action){
    console.log(state);
    console.log(action.type)
    switch(action.type){
        case "increment":
            return {init:state.init+1};
            case "decrement":
            return  {init:state.init-1};
            case "reset":
            return  {init:0};
         default :
         throw Error("invalid Actions")
    }

}

function ExampleReduce(){
  let[state,passEvnt] = useReducer(counterfn,{init:0});  // three params 1.function for the logic
                                                        // 2.inintalState
                                                        // 3.optional params

    console.log('state.....',state);
    console.log(passEvnt)
console.log('counterfn....',counterfn)
    return (<div className="countdiv">
        <div id='countShow'>{state.init}</div> 
        { <button className="button lmar-10" onClick={()=>passEvnt({type:"increment"})}>Increment</button> /*Dispatch event reqiures type so onclick  
                                                                                                           we need to define the type */}
        <button className="button lmar-10" onClick={()=>passEvnt({type:"decrement"})}>Decrement</button>
        <button className="button lmar-10" onClick={()=>passEvnt({type:"reset"})}>Reset</button>
        </div>)

}
export default ExampleReduce



// Notes
//  1.reducer has two parametes---CurrentState and  Action 
