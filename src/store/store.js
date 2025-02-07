// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import {formReducer,productReducer, userprofile} from '../slice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    product :productReducer,
    profile:userprofile       // profile is the unique  name  in slice and  userProfile is the exported value
  }
});
console.log(store)



// in store we get the reducer exported from the  slice function