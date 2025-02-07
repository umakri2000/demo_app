import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { isError } from "react-query";
var getJsonDetails=[{
    "Name":"Umakrishnan1",
    "Role":"UI Devssloper",
    "Age":23
},
{
    "Name":"Naruto",
    "Role":"BackendDeveloper",
    "Age":24
},
{
    "Name":"Sasuke",
    "Role":"DEVOPS",
    "Age":23
},
{
    "Name":"NAREN",
    "Role":"UI Devloper",
    "Age":23
},
{
    "Name":"Jagan",
    "Role":"Frontend",
    "Age":23
}
]

let  fetchuserData= async ()=>{
    let  data= axios.get('https://jsonplaceholder.typicode.com/posts')
    let res=await data;
    return res.data
    // return getJsonDetails
   
    
}
function  DataQuery(){
    
    let {isLoading,data,error,isError,isFetching}= useQuery({
        queryKey:['user'],
        queryFn:fetchuserData,
        staleTime:1000 * 60
         
    });
  console.log(data)
    console.log('isFetching....',isFetching)
    if(isLoading){
        return <h1 style={{ fontSize:  '100px', color: 'red' }}>Loading</h1>
    }
   
    if(isError){
        return <h1>{error.message}</h1>    // error is destructured from the react query
    }
    else{
        return <>
        {
            Array.isArray(data) && data.length > 0 ?
            
              ( 
                data.map(function(thisData){
                    return(
                        <>
                        <div className="flex">
                        <div className="inline_block pad_10 rmar-10">{thisData.id}</div>
                        <div className="inline_block pad_10 rmar-10 titleWidth">{thisData.title}</div>
                        {/* <div className="inline_block pad_10 rmar-10 titleWidth">{thisData.Age}</div> */}
                     
                        </div>
                        </>
                    )
                })
              )
            
            :(
             <p>No data</p>
            )
        }
        </>
       

}

}
export default DataQuery