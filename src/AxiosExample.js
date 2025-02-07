import { useLoaderData } from "react-router-dom";


function AxiosPractice(){
    let getLoaderData=useLoaderData();
    console.log(getLoaderData.data)
 
    return <>
       <div>{getLoaderData.data.title}</div>
        </> 
}
export default AxiosPractice