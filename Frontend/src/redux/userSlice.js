import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: false
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUserStart: (state) => {
            state.userData = null;
            state.loading = true
        },
        loginUserSuccess: (state, action) => {
            state.userData = action.payload
            state.loading = false
        },
        loginUserFail: (state, action) => {
            state.userData = null;
            state.loading = false;
            state.error = action.payload
        },
        signupUserStart: (state) => {
            state.loading = true,
            state.userData = null
        },
        signupUserSuccess:(state,action)=>{
            state.loading=false;
            state.userData=action.payload;
            state.error=false
        },
        signupUserFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        }
    }
})
export const { loginUserStart,loginUserFail,loginUserSuccess,signupUserStart,signupUserSuccess,signupUserFail } = userSlice.actions;
export default userSlice.reducer;