import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUserStart: (state) => {
            state.user = null;
            state.loading = true
        },
        loginUserSuccess: (state, action) => {
            state.user = action.payload
            state.loading = false
        },
        loginUserFail: (state, action) => {
            state.user = null;
            state.loading = false;
        }
    }
})
export const { setUserStart } = userSlice.actions;
export default userSlice.reducer;