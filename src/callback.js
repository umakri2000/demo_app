import { useCallback,  useState } from "react";
import CardStyle from "./card";

function ExampleCallBack(){
    let [change,setChange]=useState(1);
    let [appendtrue,addName]=useState(1)

   console.log(change);
    let dummy=()=>{
        console.log('I am dummy')

 }
 let addName1=useCallback((e)=>{
    console.log(e.target);
    console.log(appendtrue)
    addName(appendtrue+1)


},[appendtrue])
    return(
    <>
        <h2 className="inline_block">{change}</h2>
        <button className="button" onClick={() =>setChange(change+5)}>Multiply*2</button>
        <button className="button" onClick={dummy}>Dummy</button>
        <CardStyle store={appendtrue} getfn={addName1}  />
   </>

    )

}
export default ExampleCallBack
