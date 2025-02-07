import { useEffect, useState } from "react";
import React from 'react';
// import LoginFun from "./login";
function useEffectExample(){
    let x=true
    let [name,changename]=useState('')
useEffect(()=>{
   let newVal= document.getElementById('getName').value;
   changename(newVal)
console.log('UseEffect works');
},[]);
 function handleInputChange(e){
    changename(e.target.value);

}
function clickChange(e){
  
    console.log('click event....',e.target)
    changename(document.getElementById('getName').value);
 let domEle=   document.getElementsByClassName('colorClass')
 Array.from(domEle).forEach(element => {
    if(x){
        element.style.background='red' ;
        element.style.color='#fff' 
        x=false
    }
    else{
        element.style.background='lightgreen';
        element.style.color='#fff'
        x=true
    }
   
 });

}
 return(<>
 <h1 className="colorClass">{name}</h1>
 <label>Name :</label>
 <input type ="text" id="getName" placeholder="Enter your name" defaultValue={'uma'}  onChange={handleInputChange}></input>
 <button onClick={clickChange}>Click to Change</button>
 {/* <LoginFun/> */}
    </>)
    
}
 export default useEffectExample
// import React, { useState, useEffect } from 'react';

// function UseEffectExample() {
//   const [name, changeName] = useState('');

//   useEffect(() => {
//     // This runs after the component mounts, so the input element is present in the DOM
//     const inputElement = document.getElementById('getName');
//     if (inputElement) {
//       changeName(inputElement.value);
//     }
//     console.log('UseEffect works');
//   }, []); // Empty dependency array means this runs only once after the initial render

//   const handleChange = (event) => {
//     changeName(event.target.value);
//   };

//   const handleClick = () => {
//     const newValue = document.getElementById('getName').value;
//     changeName(newValue);
//   };

//   return (
//     <>
//       <h1>{name}</h1>
//       <label>Name :</label>
//       <input 
//         type="text" 
//         id="getName" 
//         placeholder="Enter your name" 
//         defaultValue="Umakris" 
//         onChange={handleChange}
//       />
//       <button onClick={handleClick}>Click to Change</button>
//     </>
//   );
// }

// export default UseEffectExample;
// import React, { useState, useEffect } from 'react';

// function UseEffectExample() {
//   const [name, changeName] = useState(''); // Initialize state with an empty string

//   useEffect(() => {
//     // Set the initial value of the input field when the component mounts
//     const inputElement = document.getElementById('getName');
//     if (inputElement) {
//       inputElement.value = 'kris';
//       changeName('kris');
//     }
//     console.log('UseEffect works');
//   }, []);

//   const handleInputChange = (event) => {
//     changeName(event.target.value);
//   };

//   const handleClick = () => {
//     const inputElement = document.getElementById('getName');
//     if (inputElement) {
//       changeName(inputElement.value);
//     }
//   };

//   return (
//     <>
//       <h1>{name}</h1>
//       <label>Name :</label>
//       <input 
//         type="text" 
//         id="getName" 
//         placeholder="Enter your name" 
//         value={name} 
//         onChange={handleInputChange} 
//       />
//       <button onClick={handleClick}>Click to Change</button>
//     </>
//   );
// }

// export default UseEffectExample;

