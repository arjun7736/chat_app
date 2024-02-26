import userReducer  from "../userSlice";
import {  combineReducers, configureStore } from "@reduxjs/toolkit";

export const store =configureStore({
    reducer:{
        user:userReducer
    }
})