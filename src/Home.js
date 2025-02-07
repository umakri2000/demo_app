import React,{Suspense} from "react";
import axios from "axios";
import { BrowserRouter, createBrowserRouter,RouterProvider, Route, Routes, useLocation, useNavigate, useRoutes,useLoaderData, useParams, Link, Outlet } from "react-router-dom";
import FetchData from "./useEffectfetch";
import Card from "./card";
// import EvntEg from "./evtHandle";
import ExampleCallBack from "./callback";

// import LoginFun from "./login";
import Info from "./info"
import UseMemoExample from "./useMemo";

import HOCExample from "./HOC";
import QueryClientExample from "./ReactQuery";
import ReactForms from "./Reactforms";
import FieldArrayExample from "./fieldarray";
import ListPage from "./ListPage";
import Form from "./reduxform";
import ProductForms from "./ProductForm";
import UseImperativeParent from "./useImperativeHook";
const Login = React.lazy(() => import('./login'));
var CodeSpit = React.lazy(()=>import ('./codespitting'));
var AxiosPractice=React.lazy(()=>import ('./AxiosExample'));
var LiftingState=React.lazy(()=>import ('./lifitngupstate'))
var useImperative=React.lazy(()=>import('./useImperativeHook'))


async function practicedata() {
  
  let axiosData=axios.get('https://jsonplaceholder.typicode.com/todos/1')

  console.log(await axiosData);
  return await axiosData
}
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
  let foodItems=[{
    "veg":["Idly",'Dosa','Vada','Chappathi'],
    "nonveg":["chicken",'mutton','fish']

}]

  let fetchData='https://jsonplaceholder.typicode.com/posts';
   let loadData= async ()=>{
    let res= await fetch(fetchData);
    console.log(res)
    let reult= await res.json();
     return reult 
}
export async function foodData() {
    // Simulate fetching data
    return [{
        'veg': ["Idly", "Dosa", "Vada", "Chappathi"],
        'nonveg': ["Chicken", "Mutton", "Fish"]
    }];
}
function Home() {
    
   
    const posts = useLoaderData();   // it is used to get the data from th loader in the router
    console.log(posts)
    let locate= useLocation();
    console.log(locate)  // gives the object like state,path,hash,search..
   
    let usenav = useNavigate();           // In React Router v6, useHistory has been replaced with useNavigate  
    console.log(usenav)

    function thisRoute(e) {
        console.log(e.target);
        let attr = e.target.getAttribute('navpath');
        if(attr =='/personal-info'){
            usenav(attr,{state:data})
        }
        else{
            usenav(attr);
        }
        
    }

    
         
    return (

        <div>
            <button className="button lmar-10" navpath='/fetchdata' onClick={thisRoute}>Fetch Data</button>
            <button className="button lmar-10" navpath='/card' onClick={thisRoute}>Card</button>
            {/* <button className="button lmar-10" navpath='/evnthandle' onClick={thisRoute}>evnthandle</button> */}
            <button className="button lmar-10" navpath='/exampleCallBack' onClick={thisRoute}>ExampleCallBack</button>
            <button className="button lmar-10" navpath='/login' onClick={thisRoute}>Login</button>
            <button className="button lmar-10" navpath='/personal-info' onClick={thisRoute}>Personal-Info</button>
            <button className="button lmar-10" navpath='/usememo' onClick={thisRoute}>UseMemo</button>
            <button className="button lmar-10" navpath='/callback' onClick={thisRoute}>UseCallBack</button>
            <button className="button lmar-10" navpath='/AxiosPractice' onClick={thisRoute}>Fetch</button>
            <button className="button lmar-10" navpath='/HocExample' onClick={thisRoute}>HOC</button>
            <button className="button lmar-10" navpath='/QueryExample' onClick={thisRoute}>QueryClent</button>
            <button className="button lmar-10" navpath='/ReactForms' onClick={thisRoute}>Forms</button>
            <button className="button lmar-10" navpath='/FieldArrayExample' onClick={thisRoute}>FieldArrayExample</button>
            <button className="button lmar-10" navpath='/redux-form' onClick={thisRoute}>redux-form</button>
            <button className="button lmar-10" navpath='/product-form' onClick={thisRoute}>Product-form</button>
            <button className="button lmar-10" navpath='/codeSpitting' onClick={thisRoute}>dynamicimport</button>
            <button className="button lmar-10" navpath='/LiftingState' onClick={thisRoute}>Lifting Up states</button>
            <button className="button lmar-10" navpath='/useImperative' onClick={thisRoute}>UseImperative Hook</button>
           
            
  
        </div>
    );
}
function ErrorPage() { 
    return (
      <div>
        <h1>Error loading data!</h1>
      </div>
    );
  }
  function Items(){
    return <>Hi</>
  }
  function Food(){
 let getFood=useLoaderData();
 console.log(getFood)
    let navPage=useNavigate();
    function thisRoute(e) {
        console.log(e.target);
        let attr = e.target.getAttribute('navpath');
        navPage(attr)

    }
    let getParams=useParams();
    console.log(getParams)
    return <>
    {
        getParams.foodId =='veg'?(
            getFood[0].veg.map(function(vegItems){
                return(
                  // <div onClick={thisRoute} navpath={`${getParams.foodId}/${vegItems}`}>{vegItems}</div>
                  <div className="">{vegItems}</div>

                )

            })
        ):
        getParams.foodId =='nonveg'?(
            getFood[0].nonveg.map(function(Items){
                return(
                    <div>{Items}</div>
                )
            })
        ):
        (<div>Orders Please</div>
          
        )

    }

        <div>You Click{getParams.foodId}</div>
    <h1>Food Componnets Welcome</h1>
    
    <button className="button lmar-10" navpath='veg'   onClick={thisRoute}>VEG</button>
    <button className="button lmar-10" navpath="nonveg" onClick={thisRoute}>Non-Veg</button>
    {/* <Outlet/> */}
     </>
  }
 function App(){
    console.log('app Component renders')

    let routehook=createBrowserRouter([{
        path:'/',
        element:<Home /> ,
        loader:loadData, // used only for createBrowserRouter loader uesd to mount the data while before the component renders 
                           //the loader data must return something
        errorElement:<ErrorPage/> //used only for createBrowserRouter errorElement want to show the error in the Api[like bad network,wrong url] what UI want to display
       },
       {
           path:'/card',
           element:<Card/>,
          
          },
          {
            path:'/food',
            element:<Food/>,
            loader:  foodData,
            children: [
                {
                  path: ":foodId",
                  element: <Food />
                 
                },
              ],
           
           },
          // {
          //  path:'/evnthandle',
          //  element:<EvntEg /> 
          // },
          {
            path:'/codeSpitting',
            element:(
              <Suspense fallback={<h1>  error</h1>}>
             <CodeSpit />
             </Suspense> )
           },
          {
            path:'/HocExample',
            element:<HOCExample /> 
           },
          {
            path:'/usememo',
            element:<UseMemoExample /> 
           },
           {
            path:'/callback',
            element:<ExampleCallBack /> 
           },
           {
            path:'/QueryExample',
            element:<QueryClientExample /> 
           },
           {
            path:'/ReactForms',
            element:<ReactForms />
           },
           {
            path:'/FieldArrayExample',
            element:<FieldArrayExample />
           },
           {
            path:'/list-page',
            element:<ListPage />
           },
           {
            path:'/redux-form',
            element:<Form />
           },
           {
            path:'/product-form',
            element:<ProductForms />
           },
           {
            path:'/useImperative',
            element:<UseImperativeParent />
           },
          {
            path:'/login',
            
            element:(<Suspense fallback={<h1>LOADING</h1>} >
            <Login /></Suspense>),
            
           },
           {
            path:'/personal-info',
            element:<Info />
           },
           
           {
            path:'/AxiosPractice',
            element:(<Suspense fallback={<h1>Uma</h1>}><AxiosPractice /></Suspense>),
            loader: practicedata
           },
           {
            path:'/LiftingState',
            element:(<Suspense fallback={<h1>Loadind the Data</h1>}><LiftingState /></Suspense>),
            loader: practicedata
           },
        //    {
        //     path:'/',
        //     element:<Home />,
            
        //    }
        
        ]
   
   );
   return (
  
            <RouterProvider router={routehook} />
    // </Suspense>
    
  );
   

 }

export default App;

// LINK is an alternative to the anchor tag in the react
//useParams() it's used to access the dynamic values that are present in the URL.
// react routes are  used for navigation we want to define path and elemet

//  we can create the router using useRoutes([
//      'path':'{path for navigation}',
 //      'ele': <Componet Name>},.....  
//])
 // we can use the decalred useRoutes in return statement of the componnet 

 // Second method 

  // we can use <BrowserRoute>..<Routes><Route></Routes>  </BrowserRoute>
  // in <Route> we can define the  element & path



  // UseNavigation - used to navigate from one page to another via programatically eg after formSubmisson,login
  //UseLocation -gives the Information about the current URi  like  allows you to pass data between routes 


//Difference between the BrowserRouter, createBrowserRouter,useRoutes

// 1.BrowserRoutee
// Purpose: Sets up a client-side router using the HTML5 history API.

// Usage: It’s a wrapper component used to enable routing in the entire application. You usually wrap your whole app with <BrowserRouter>.

// When to Use: When you want basic client-side routing without the need for data loading or advanced routing features.

//Syntax
/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> */

// 2.useRoutes
// Usage: You define your route configuration in an array of objects inside the component.
// The route definitions and components are directly handled by the useRoutes() hook.

//3. CreateBrowserRouter
// Usage: You define your routes in an array of objects (similar to useRoutes()), but you use createBrowserRouter() to handle route loaders, actions, and error elements.
// When to Use: When you need to load data before rendering routes, handle form submissions, or manage errors at the route level.
    
