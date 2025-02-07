import React, { useEffect, useState } from "react";
import '../src/forms.scss'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userimg from './uma casual.jpg'
import  * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import view from './visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import ListPage from "./ListPage";
import { useNavigate } from "react-router-dom";
import {updateProfile} from "./slice"

//Schema part for the form--
// this part is for shaping the forms like valiation
var getData=[];
var schema=Yup.object().shape({
    fnName:Yup.string().required("Kindly type the full name"),  // in required we can type the custom message 
    lastname:Yup.string().required(),
    occupation:Yup.string().required(),
    country:Yup.string().required(),
    company:Yup.string().required(),
    mail:Yup.string().email().required(),
    mob_number:Yup.string().required('enter the number').min(10,'Minimum value is 10').max('10','Maximum value is 10').matches(/^[0-9]+$/,'kindly enter the digits')
});
// console.log(schema)
function ReactForms(){
    var dispatchEvent=useDispatch();
   var navigateList= useNavigate();
   var [getFileName,getFileNameFn]=useState('');
   var [getImage,imageFn]=useState('')
    var[getListView,listViewFn]=useState(false)
    var {register,handleSubmit,reset,setValue,formState:{errors, submitCount,isSubmitSuccessful,isDirty,isValid}}=useForm({
        resolver:yupResolver(schema),    //  ressolver for setting schema to form
        mode:"onChange",
        defaultValues:{
            userprofile:'',
            fnName:'',
            lastname:'',
            occupation: '',
            company:'',
            mail:'',
            country:'',
            gender:"",
            mob_number:""

        }
    });
    const onSubmit = (data) => {
        console.log(data);
        
        getData.push(data);
        console.log(getData);
        dispatchEvent(updateProfile(data))
        
      };
    var handlebtnSubmit=(data)=>{
        handleSubmit(onSubmit)();
       
        




    }
    var changetoView=()=>{
        listViewFn(true);
        navigateList('/list-page')


    }
   var callFileUpload =(e)=>{
 
    document.getElementById('upload_image').click();  // Trigger the file input click
   
   }
   var captureFile=(e)=>{
    getFileNameFn(e.target.files[0]);
    
   }
   useEffect(()=>{
var newFile=new FileReader();
console.log('getFileName...',getFileName);
if(getFileName!=''){
    newFile.onloadend = function() {
        const base64String = newFile.result;
        imageFn(base64String);
        setValue('userprofile',base64String)
      };
    
    newFile.readAsDataURL(getFileName)
}


   },[getFileName])
    useEffect(()=>{
        if(isSubmitSuccessful){
           reset();
        //    reset({
        //     userprofile: null // Reset the file input field
        //   });
          imageFn('') ;
          getFileNameFn('')  
           alert('form reset successfully')
        }
           },[isSubmitSuccessful, submitCount,reset])
    return(
        <>
         {!getListView &&
        <div className="form-container center">
            
        <div className="form-wrapper relative">
        <div className="absolute view-list">
                <img src={view}  alt="view" onClick={changetoView} />
            </div>
               <div className="f_21">Basic Forms</div>

               <div className="form-left relative">
                <div className="img-parent">
                {getFileName!='' && <img src={getImage} alt="user-img"/>}
                    <div className="none">
                         <input type="file" {...register('userprofile')} id='upload_image' onChange={captureFile}/>
                    </div>
                </div>
                <span className="replace_img" onClick={callFileUpload}>Upload Image</span>
               </div>
               <div className="form-right">
                 <div className="inline_block relative width_50 tmar_15 bmar-10">
                 <label> First Name</label>
                 <input {...register('fnName',{required:"FirstName Required",},)} type="text"/>
                 {errors.fnName?.message && <span className="error-msg">{errors.fnName?.message}</span>}
                 </div>
                 <div className="inline_block relative width_50 tmar_15 bmar-10">
                 <label> Last Name</label>
                 <input {...register('lastname',{required:true,})}type="text"/>
                 {errors.lastname?.message && <span className="error-msg">{errors.lastname?.message}</span>}
                 </div>
                 <div className="width_100 relative tmar_15 bmar-10">
                 <label>Occupation</label>
                 <input {...register('occupation',{required:true})} type="text" className="width-95"/>
                 {errors.occupation?.message && <span className="error-msg">*{errors.occupation?.message}</span>}
                 </div>
                 <div className="width_100 relative bmar-10 tmar_15">
                 <label>Company</label>
                 <input {...register('company',{required:true})} type="text" className="width-95"/>
                 {errors.company?.message && <span className="error-msg">*{errors.company?.message}</span>}
                 </div>
                 <div className="inline_block relative width_50 tmar_15 bmar-10">
                 <label>Country</label>
                 <input {...register('country',{required:true})} type="text"/>
                 {errors.country?.message && <span className="error-msg">*{errors.country?.message}</span>}
                 </div>
                 <div className="inline_block relative width_50 tmar_15 bmar-10">
                 <label>Gmail</label>
                 <input {...register('mail',{required:true,minLength:10})} type="text"/>
                 {errors.mail?.message && <span className="error-msg">*{errors.mail?.message}</span>}
                 </div>
                 <div className="inline_block relative width_50 tmar_15 bmar-10">
                 <label>Gender</label>
                 <select {...register('gender',{required:true})}>
                    <option value="Male">MALE</option>
                    <option value="FeMale">Female</option>
                    <option value="others">Others</option>
                 </select>
                 {errors.gender?.message && <span className="error-msg">*{errors.gender?.message}</span>}
                 </div>
                 <div className="inline_block relative width_50 tmar_15 bmar-10">
                 <label>Phone-Number</label>
                <input type="text" {...register('mob_number')}/>
                 {errors.mob_number?.message && <span className="error-msg">*{errors.mob_number?.message}</span>}
                 </div>
               </div>
               <div className="btn-section">
            <button className="button-submit" onClick={handlebtnSubmit} disabled={!isDirty || !isValid}>Save Changes</button>
            <button className="cancel-btn">Cancel</button>
        </div>
        </div>
        
        </div>

        }
        
        </>
    )
}
export default ReactForms
{/* use Form is a react hook used to manage the form state and validation 

hook--var {register,handleSubmit,watch,formState:{errors}} useForm()  --  these are all the commonly destructed property 
another paca


*/}



