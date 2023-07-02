import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from '@env'

const API = API_URL

const initialState = {
    userInfo: {},
    error: null,
    isAuthenticated: false,
    token: null,
    isLoading: false,
    status:null,
    otp: {}
}

const options = {
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0YW1hbGVzcEBnbWFpbC5jb20iLCJpYXQiOjE2ODgzMTgwNjksImV4cCI6MTY4ODM1NDA2OX0.a1VHVZYIVbxO8obu92FLs0PEmfaRG5balFWAp-atwypgYZ7F_R9JD1AKps7Wn8f7'
    },
};


export const createAccount = createAsyncThunk('users/signup', async(userDetails) => {
    try {
        const response = await axios.post('http://localhost:8081/users/signup', userDetails, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
        })
        return response.data
    }catch (error) {
        throw error.response.data.message
    }
});

export const verifyEmail = createAsyncThunk('users/verifyEmail', async(email) => {
    try {
        const response = await axios.post(`${API}/users/verifyEmail`, email)
        return response.data
    }catch (error) {
        throw error.response.data.message
    }
});

export const signin = createAsyncThunk('users/signin', async(useDetails) => {
    try {
        const response = await axios.post(`${API}/users/signin`, useDetails)
        return response.data
    }catch (error) {
        throw error.response.data.message
    }
});

export const forgotPassword = createAsyncThunk('users/forgotPassword', async(email) => {
    try {
        const response = await axios.post(`${API}/users/forgotPassword`, email)
        return response.data
    }catch (error) {
        throw error.response.data.message
    }
});

export const verifyOtp = createAsyncThunk('users/verify', async(otp) => {
    try {
        const response = await axios.post(`${API}/users/verify`, otp, options)
        return response.data
    }catch (error) {
        throw error.response.data.message
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(signin.pending, state => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(signin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.userInfo = action.payload.data;
            state.token = action.payload.token;
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
          })
          .addCase(signin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload : action.error.message;
          })
          .addCase(verifyOtp.pending, state => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(verifyOtp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.userInfo = action.payload.data;
            state.otp = action.payload.otp;
            state.token = action.payload.token;
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
          })
          .addCase(verifyOtp.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload : action.error.message;
          })
          .addCase(forgotPassword.pending, state => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload.data;
          })
          .addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload : action.error.message;
          })
          .addCase(verifyEmail.pending, state => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(verifyEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload.data;
          })
          .addCase(verifyEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload : action.error.message;
          })
          .addCase(createAccount.pending, state => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(createAccount.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload;
          })
          .addCase(createAccount.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload : action.error.message;
          });
      }
})


export default authSlice.reducer