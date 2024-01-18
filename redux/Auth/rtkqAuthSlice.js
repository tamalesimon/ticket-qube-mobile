import { createSlice } from "@reduxjs/toolkit";

const rtkqAuthSlice = createSlice({
    name: 'rtkauth',
    initialState: {
        email: null,
        password: null,
        token: null,
        otp: null
    },
    reducers: {
        setCredentials: (state, action) => {
            const { email, password, accessToken } = action.payload
            state.email = email
            state.password = password
            state.token = accessToken
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

export const { setCredentials, logOut } = rtkqAuthSlice.actions;

export default rtkqAuthSlice.reducer

export const selectCurrentUserEmail = (state) => state.rtkauth.email
export const selectCurrentToken = (state) => state.rtkauth.token