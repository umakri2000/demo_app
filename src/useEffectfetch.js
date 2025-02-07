import React, { useEffect, useState } from 'react';

function FetchData() {
    let obj={}
    const [name, setName] = useState(obj); // useState hook should be used at the top level
    const[setUser,setUserFn]=useState(false)

    
    useEffect(()=>{
        if(setUser){
            fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>{
                console.log('res',res);
                return res.json()
    
             })
             .then(res=>{
                console.log(res);
                setName(res);
    
             })
        }     
    },[setUser])
   

    return (
        <>
            <div>{name.title}</div>
            <button onClick={()=>{setUserFn(true)}} className='button '>Load Data</button>
        </>
    );
}

export default FetchData;
