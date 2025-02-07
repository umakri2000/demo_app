import { Route,Routes } from "react-router-dom";
let fetchData='https://jsonplaceholder.typicode.com/posts';
export let  loadData= async ()=>{
    let res= await fetch(fetchData);
    let reult= await res.json();
    console.log(reult)
}
function loaderComponet(){
    
     
    return <h3>I am loader</h3>
    

}
export default loaderComponet