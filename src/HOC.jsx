import React, { useState ,useEffect} from "react";
import guessNumber from "./guessNumber";


function HOCExample(){
    let aletClick=()=>{
        console.log('alert')
        alert('generate OTP Start')
    }
    let LoaderEnable=getLoader(guessNumber);
    let [isGenerated,generateOtp]=useState(false);
    
    return(
        
        <>    
           <LoaderEnable  isLoading={!generateOtp} isgenerate={isGenerated} falseCallback={() => generateOtp(false)}/>
        <button onClick={() => {aletClick();generateOtp(true);}}>Generate OTP</button>
        </>

    )
}

let getLoader=(GetComp)=>{
   
    console.log(GetComp);
    return (props) => {
        let [loader,setLoading]=useState(true)
        useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            
            return () => clearTimeout(timer);
        }, []);
        console.log(props)
        return( <>
        {loader && <h1>Loading the data</h1>}
        {loader == false ? <GetComp   {...props} /> :''}
             
        
        
         
         </>
        );
    };


}
export default HOCExample



// HOC - Higher order Component
//In this we can pass the component as a param and made changes to the passed component and use it
//A Higher-Order Component is a function that takes a component as an argument and returns a new component. In above code, getLoader is the HOC.