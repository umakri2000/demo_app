import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Frnds from './frnds';
// import Login from './login'
import EvntEg from './evtHandle';
import Info from './info';
// import UseEffectExample from './useeffect';
import UseContextexample from './Context';
import ExampleReduce from './reducer';
import UseContextExample from './UseContextExample';
import FetchData from './useEffectfetch';
import EnhancedComponent from './loading';
import { BrowserRouter,Route,Routes,Link, useNavigate, HashRouter } from 'react-router-dom';

  import ReducerForm from './reducerform';
import Usetransistion from './Usetransistion';
import RenderHtmlUseRef from './Useref';
import UseMemoExample from './useMemo';
import ExampleCallBack from './callback';
import { Provider } from 'react-redux';
import { store,product } from './store/store';
import Home from './Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
let frndsObj=`hi I am Kris`;

let data=[{
  'name':"Umakrishnan",
   'profession':'UI',
   'Native': 'Tirunenlveli',
   'Age':'24',
   'Favorite':'Coding',
   'emoji':"😂"

},
{
  'name':"krish",
   'profession':'UI',
   'Native': 'Tirunenlveli',
   'Age':'24',
   'Favorite':'Coding',
   'emoji':"😍"

}]

// let frndsObj;
console.log(frndsObj)
let showLogin=false
function onCallRoute(e){
  console.log(e.target);

  
}
root.render(
  <Provider store={store}>
 <>
<h1>React.js learning</h1>

{<Home />}

{/* {<EnhancedComponent/>} */}
 
  </>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();














  {/* <App  firstName="Naruto" ClanName="Uzumaki"/> */}
    {/*   
    
    {frndsObj != undefined &&  <Frnds params={frndsObj} /> }  */}
    {/* <Frnds props={frndsObj} /> */}
    {/* <Info info={data}/> */}
    {/* {showLogin && <Login /> } */}
    {/* <EvntEg /> */}
    {/* {UseContextexample} */}
    {/* <UseContextexample/> */}
    {/* <UseContextExample /> */}
    {/* // <FetchData />
    // {<UseEffectExample /> }
  

    // <ExampleReduce /> */}
    {/* { <ReducerForm/> }
    {<RenderHtmlUseRef/>} */}
    {/* <Usetransistion/> */}
    {/* <ExampleReduce /> */}
    {/* {<UseMemoExample/>} */}
    {/* {<ExampleCallBack/>} */}
    // </>
  //  {frndsObj != undefined &&  <Frnds params={frndsObj} /> } -----> condition line for the Component
