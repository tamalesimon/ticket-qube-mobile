import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_LOCAL, API_DEV } from '@env'

const API = API_DEV;
const LocalAPI = "http://localhost:8080";

const initialState = {
  userInfo: {},
  error: null,
  isAuthenticated: false,
  isFirstLaunch: true,
  isVerified: false,
  isExisting: false,
  token: '',
  isCreated: false,
  isLoading: false,
  status: null,
  otp: '',
  isSignedUp: {},
  isVerified: '',
  isLoggedIn: {},
  isError: {}
}

const headers = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  }
};

const axiosInstance = axios.create({
  baseURL: LocalAPI,
  headers: headers.headers
});


export const createAccount = createAsyncThunk('users/signup', async (userDetails) => {
  try {
    const response = await axiosInstance.post(`${LocalAPI}/users/signup`, userDetails, {
      options: headers
    });
    console.log("headers: ", axiosInstance)
    AsyncStorage.setItem('signupInfo', JSON.stringify(response.data))
    return response.data
  } catch (error) {
    console.log(error)
    throw error.response.data.message
  }
});

export const verifyOtp = createAsyncThunk('users/verify-otp-on-signup', async (data) => {
  try {
    const response = await axiosInstance.post(`${LocalAPI}/users/verify-otp-on-signup`, data)
    AsyncStorage.removeItem('signupInfo');
    AsyncStorage.setItem('verificationInfo', JSON.stringify(response.data))
    console.log("data", data)
    return response.data
  } catch (error) {
    throw error.response.data.message
  }
});

export const signin = createAsyncThunk('users/signin', async (useDetails) => {
  try {
    const verificationInfo = await AsyncStorage.getItem('verificationInfo');
    const tokenDetails = JSON.parse(verificationInfo);
    const response = await axiosInstance.post(`${LocalAPI}/users/login`, useDetails, {
      headers: {
        ...headers.headers,
        'Authorization': `Bearer ${tokenDetails.token}`
      }
    })
    AsyncStorage.removeItem('verificationInfo');
    AsyncStorage.setItem('qubeUserLoginDetails', JSON.stringify(response.data))
    return response.data
  } catch (error) {
    throw error.response.data.message
  }
});

export const forgotPassword = createAsyncThunk('/users/forgot-password', async (email, { getState }) => {
  try {
    const bearerToken = getState().auth.token;
    const response = await axiosInstance.post(`${LocalAPI}/users/forgot-password`, email, {
      headers: {
        ...headers.headers,
        'Authorization': `Bearer ${bearerToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message
  }
});

export const resetPassword = createAsyncThunk('reset/password', async (password, { getState }) => {
  try {
    const bearerToken = getState().auth.token;
    const response = await axiosInstance.post(`${LocalAPI}/users/forgotPassword`, password, {
      headers: {
        ...headers.headers,
        'Authorization': `Bearer ${bearerToken}`
      }
    })
    return response.data
  } catch (error) {
    throw error.message
  }
});

export const verifyUser = createAsyncThunk('users/verify', async (data) => {
  try {
    const response = await axiosInstance.post(`${LocalAPI}/verification/verify/${userid}`, data, {
      headers: {
        ...headers.headers,
        'Authorization': `Bearer ${bearerToken}`
      }
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
        state.isLoading = true;
        state.isAuthenticated = true;
        state.isVerified = true;
        state.userInfo = action.payload;
        state.token = action.payload.token;
        state.status = action.payload.status ? true : false;
        axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : action.error.message;
      })
      .addCase(verifyOtp.pending, state => {
        state.isLoading = true;
        state.isVerified = null;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true
        state.isVerified = action.payload; //fix this its not supposed to be here its supposed to be in pending
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : action.error.message;
      })
      .addCase(forgotPassword.pending, state => {
        state.isLoading = true;
        state.isExisting = false;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isExisting = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : action.error.message;
      })
      .addCase(verifyUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload.data;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : action.error.message;
      })

      //signp new account
      .addCase(createAccount.pending, state => {
        state.isLoading = true;
        state.isCreated = false
        state.error = null;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.userInfo = action.payload;
        state.isSignedUp = action.payload;
        state.token = action.payload.token;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : action.error.message;
      })

      //reset password
      .addCase(resetPassword.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isReset = true
        state.error = null
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})


export default authSlice.reducer