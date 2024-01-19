import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: null,
        password: null,
        token: null,
        otp: null,
        status: null
    },
    reducers: {
        setCredentials: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
            state.token = action.payload.token,
            state.status = action.payload.status
        },
        logOut: (state, action) => {
            state.email = null
            state.password = null
            state.token = null
        },
        setOtp: (state, action) => {
            state.otp = action.payload
        }
    },

})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer

export const selectCurrentUserEmail = (state) => state.auth.email
export const selectCurrentUserPassword = (state) => state.auth.password
export const selectCurrentUserToken = (state) => state.auth.token
