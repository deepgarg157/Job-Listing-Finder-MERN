import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utility/userSlice'
import jobPostDataSlice from "./jobPostDataSlice";
import alertSlice from "./alertSlice";

const appStore = configureStore({
      reducer :{
       user : userReducer,
       jobPostData:jobPostDataSlice,
       loading:alertSlice
      }
    });

export default appStore;