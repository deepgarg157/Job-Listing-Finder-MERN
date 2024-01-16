import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utility/userSlice'
import jobPostDataSlice from "./jobPostDataSlice";

const appStore = configureStore({
      reducer :{
       user : userReducer,
       jobPostData:jobPostDataSlice
      }
    });

export default appStore;