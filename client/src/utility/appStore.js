import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utility/userSlice'

const appStore = configureStore({
      reducer :{
       user : userReducer
      }
    });

export default appStore;