import React from "react";
import Image from "./travelim";
import { useNavigate } from "react-router-dom";
function LoginFun(){
  let usenav = useNavigate();           // In React Router v6, useHistory has been replaced with useNavigate  
  console.log(usenav)

  function thisRoute(e) {
      console.log(e.target);
      let attr = e.target.getAttribute('navpath');
      usenav(attr,{replace:true});
  }

    return (<div className="login">
         <h2 className="whiteColor">Login Page</h2>
        <div className="login_parent">
          <div className="backgroundWhite pad_10 border-rad-4 width50">
            <div>
            <div>User Name</div>
            <input type='text' className="width100"></input>
            </div>
            <div>
            <div>Password</div>
            <input type='password' className="width100"></input>
            </div>
            
           <div className="cs-btn cs-btnloginStyle">
            <button className="cs-submitlogin button">Submit</button>
           </div>
           </div>
           <Image />
           </div>
           <button className="button lmar-10" navpath='/' onClick={thisRoute}>Back</button>
           </div>)
}
export default LoginFun