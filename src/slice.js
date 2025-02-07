// src/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: ''
};
var productFormState=[{
    ProductArray:[]
}]
var profileInitialState=[{     // it s the state
  profiledata:[]
}]
console.log('initialState....',initialState)
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
        console.log('action.....',action);
        
      const { field, value } = action.payload;
      console.log('state....',[field]);
      console.log('value....',value)
      state[field] = value;
    },
    resetForm: (state) => {
      state.name = '';
      state.email = '';
    }
  }
});
const productSlice= createSlice({
    name:'product',
    initialState:productFormState,
    reducers:{
       updateProductForm:(state,action)=>{
        
          console.log('action.payload....',action.payload);
          var {productOwner,productname}=action.payload;
          state[0].ProductArray=[
            ...state[0].ProductArray,
            {
                productOwner,
                productname,
              },
          ]
          console.log('Updated ProductArray:', Array.from(state[0].ProductArray));
       },
       resetDispatch:(state,action)=>{
        state[0].ProductArray=[
           ...state[0].ProductArray,
            {
                productOwner:'',
                productname:''
              },
          ]
       }

    }
})

var userData=createSlice({
    name:"profile",
    initialState: profileInitialState,
    reducers:{
        updateProfile:(state,action)=>{
            console.log('action.payload....',action.payload);
            state[0].profiledata=[
                ...state[0].profiledata,
                    action.payload
                ];
              console.log('Update array....', state[0].profiledata)
        }
    }
})
 
export const { updateField, resetForm } = formSlice.actions;
export const{updateProductForm,resetDispatch}=productSlice.actions   //actions need to be exported because in the component we are dispatching the event 
export const{updateProfile}=userData.actions
export const formReducer= formSlice.reducer;  // this is export is for the store.js 
export const productReducer=productSlice.reducer  // this is export is for the store.js
export const  userprofile=userData.reducer



// create slice :In slice name must be Unique name

// reducers  are the object with the dispatched events

// redux works on the principle of the single source of  truth here state are not immutable 
