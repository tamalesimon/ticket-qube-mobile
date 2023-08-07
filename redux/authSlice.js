import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_LOCAL, API_DEV } from '@env'

const API = API_DEV;
const LocalAPI = API_LOCAL;

const initialState = {
  userInfo: {},
  error: null,
  isAuthenticated: false,
  isFirstLaunch: true,
  isVerified: false,
  token: '',
  isLoading: false,
  status: null,
  otp: ''
}

const options = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  }
};

const axiosInstance = axios.create({
  baseURL: LocalAPI,
  headers: options.headers
});


export const createAccount = createAsyncThunk('users/signup', async (userDetails) => {
  try {
    const response = await axiosInstance.post(`${LocalAPI}/users/signup`, userDetails, {
      options
    });
    return response.data
  } catch (error) {
    console.log(error)
    throw error.response.data.message
  }
});

export const verifyEmail = createAsyncThunk('users/verifyEmail', async (email) => {
  try {
    const response = await axiosInstance.post(`${LocalAPI}/users/verifyEmail`, email)
    return response.data
  } catch (error) {
    throw error.response.data.message
  }
});

export const signin = createAsyncThunk('users/signin', async (useDetails) => {
  try {
    const response = await axiosInstance.post(`${LocalAPI}/users/signin`, useDetails, {
      options
    })
    return response.data
  } catch (error) {
    throw error.response.data.message
  }
});

export const forgotPassword = createAsyncThunk('users/forgotPassword', async (email) => {
  try {
    const response = await axiosInstance.post(`${LocalAPI}/users/forgotPassword`, email, {
      options
    })
    return response.data
  } catch (error) {
    throw error.response.data.message
  }
});

export const verifyOtp = createAsyncThunk('users/verify', async (data, { getState }) => {
  try {
    const userid = getState().auth.userInfo.userId;
    console.log("testing OTP: ", data)
    const response = await axiosInstance.post(`${LocalAPI}/verification/verify/${userid}`, data, {
      options
    })
    console.log("response from verification: ", response)
    return response.data
  } catch (error) {
    console.log(error)
    throw error.response.data.message
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
        state.isLoading = true;
        state.isAuthenticated = true;
        state.userInfo = action.payload;
        state.otp = action.payload.otp;
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
        state.token = action.payload.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : action.error.message;
      });
  }
})


export default authSlice.reducer