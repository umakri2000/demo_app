import  store  from "./store/store";
import { useSelector } from "react-redux";
import { useState,useEffect} from "react";
// import {updateProductForm} from "../src/slice"

function ProductList(){
    var [productState,productStatefn]=useState([])
    var getData=useSelector((state) => state.product[0].ProductArray);   // useSelector is the hook for the getting data from 
                                                                         // this dispatched event
    console.log('productOwner....',getData);
    useEffect(() => {
        // Update local state when getData changes
        productStatefn(getData);
    }, [getData]); 
 return(
    <>
    <table className="productTable">
  <tr>
  <th>ProductOwner</th>
    <th>ProductName</th>
    
  </tr>
  { getData.length !=0 &&
        productState.map(function(val){
            // console.log(val)
            return(
                <>
                <tr>
                    <td>
                    <span className="">{val.productOwner}</span>
                    
                    </td>
                    <td>
                    <span className="">{val.productname}</span>
                    
                    </td>
                
                </tr>
              
               
                </>
            )
        })}
  
  </table>
    </>
 )
}

 export default ProductList

