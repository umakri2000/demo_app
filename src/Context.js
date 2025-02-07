import { createContext, useState } from "react"; 
import Welcome from "./WelcomeComponet";
let nameAkatsuki='Madara'
export let changeName=createContext({'nameAkatsuki':nameAkatsuki,
    // changeMember:()=>{}
});

function useContextexample(){
     let [changeVillan,changeMember] =useState(nameAkatsuki) 
  
 
function changeEvil(){
    changeMember('OBITO')
}
   
    return(
        <>
        <h1>useContext</h1>
       
        <changeName.Provider value={changeVillan}>
            <Welcome />
        </changeName.Provider>
        <button className="button" onClick={changeEvil} style={{marginLeft:'10px'}}>changeName</button>
     </>
       
    )
    
}
export default useContextexample// 