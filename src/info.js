import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// function PersonalInfo({info}){
//     let routeLocation= useLocation();
//     console.log(routeLocation)
//     let [item,addfn]=useState([])   ;
//     let [cuurentIdx,prevIdx]=useState(0);        // updating the array using the useState
//      let [getVal,thisfun]=useState('kris');
     
//      if(getVal === 'showEmoji'){
//        let a= document.getElementsByClassName('namecard');
       
//        Array.from(a).forEach(element => {
//         console.log('element...',element)
//         element.style.border="2px solid #efefef"
//        });

//       let parentElement=document.querySelector('.selectedParent');
//       if(parentElement){
//        parentElement.querySelector('#getImage').style.display='block';
//         parentElement.classList.remove('selectedParent')
//       }  
//     }
     
    
//     function closeThis(e){
//         console.log(e.target.parentElement);

//         e.target.parentElement.style.display='none'
        

//     }
//     function seeImage(e){
//         console.log(e);
//         e.target.parentElement.classList.add('selectedParent')

//         thisfun('showEmoji');
//     }
//     function addItem(){
        
//         let JsonObj=[{'name':'Umakrishna'},{'name':'Naruto'},
//             {'name':'Sasuke'},{'name':'Gojo'}
//         ]
//         // JsonObj.forEach(element => {
//         //     console.log('element.....',element)
//         //     addfn((prev)=>{return[...prev,element]})
//         //     // return false
            
//         // });
       
//          let getthisIdx= cuurentIdx >= JsonObj.length ? 0:cuurentIdx 
      
//         addfn((prev)=>{return[...prev,JsonObj[getthisIdx]]});
//         prevIdx((prevIdxx) => (prevIdxx + 1 >= JsonObj.length ? 0 : prevIdxx + 1));
        
//     }
    
//     console.log(item);
//     return(
        
//     <>
// <h1>{getVal}</h1>
//         {info.map((val,idx)=>{
//             return(<div className="namecard relative">
//                     <svg className="absolute right-0 "onClick={(event)=>closeThis(event)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
//             <h3 className=" namechild italic  font-16" key={idx} >{val.name}</h3>
//             <div className="italic  namechild font-16" key={idx}>{val.profession}</div>
//             <div className="italic namechild font-16"  key={idx}>{val.Age}</div>
//             <div className="italic namechild font-16"  key={idx}>{val.Favorite}</div>
//            <div id="getImage" style={{display:'none'}}>{val.emoji}</div>
//             <button className="btnstyle absolute" onClick={(event=>seeImage(event))}>See Image</button>
//             </div>)
//         })}
//         {item.map((e)=>{return <li>{e.name}</li>})}
     
//     <button className="btnstyle" onClick={addItem} style={{width:'100px','margin-left':'10px'}}>Add Item</button>
//     </>

//     )
// }
function PersonalInfo({info}){
    console.log({info})
        let routeLocation= useLocation();
         console.log(routeLocation)
         
         
         return(
            <>           
             {routeLocation.state.map((thisstate)=>{
                return (
                    <>
                    <div className="f_15">{thisstate.name}</div>
                    <div className="f_15">{thisstate.profession}</div>
                    </>

                )
                       
            })}
            </>

            )
            
         
        }


        
export default PersonalInfo