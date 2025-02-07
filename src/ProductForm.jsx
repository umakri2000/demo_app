import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import  * as Yup from 'yup'
import { useForm } from "react-hook-form";
import ProductList from "./ProductList";
import {updateProductForm,resetDispatch} from "../src/slice"
import { useDispatch,useSelector } from "react-redux";

function ProductForms(){
var getFormData=useSelector((state) => state.product[0].ProductArray);
    var productDispatch=useDispatch();
     

var productschema=Yup.object().shape({
    productname:Yup.string().required('this is required'),
    productOwner:Yup.string().required('kindly enter the owner name')

})

    var {register,handleSubmit,reset,formState:{errors,isSubmitSuccessful,submitCount,isDirty,isValid}}=useForm({
        resolver:yupResolver(productschema),
        "defaultValues":{
            "productname":"",
            "productOwner":""
        },
        // mode:"onChange"
    });
    console.log(isSubmitSuccessful)
    useEffect(()=>{
        Array.from(document.getElementsByClassName('product-wrapper'),(element,_idx)=>{
            console.log('i')
           var getInput= element.querySelectorAll('input');
           if(getInput){
            getInput.forEach(inputElement=>{
                inputElement.value=''
            })
            
           }

        })

    },[submitCount]);
    console.log(isDirty);
    var onsubmit=(data)=>{
        console.log(data);
        if(data.productOwner !='' && data.productname !='' ){
            productDispatch(updateProductForm(data));
            reset()
        }
        else{
            alert('fill the fields')
        }
        // productDispatch(resetDispatch({'productname':'','productOwner':''}));

        
        
    }
    var formSubmit=()=>{
        handleSubmit(onsubmit)();
        
        
    }
    return(
        <div className ="product-container">
            <div className="product-wrapper">
                <div className="relative bmar-20">
                    <label>Product Name</label>
                    <input type="text" {...register('productname')}/>
                   {errors.productname?.message && <span className="error-msg">{errors.productname?.message}</span>}
                </div>
                <div className="relative bmar-20">
                    <label>Product Owner</label>
                    <input type="text" {...register('productOwner')}/>
                  {errors.productOwner?.message && <span className="error-msg">{errors.productOwner?.message}</span>}
                </div>
            </div>
             <button className="button green-btn" onClick={formSubmit} disabled={!isDirty || !isValid} >Submit</button>
             {getFormData.length!=0 && <ProductList/>}
        </div>
        

    )
}
export default ProductForms