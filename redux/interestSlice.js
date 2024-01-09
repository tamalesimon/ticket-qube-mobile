import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_LOCAL, API_DEV } from '@env'

const initialState = {
    interests: [
        { id: 1, name: "Music" },
        { id: 2, name: "Food & Drink" },
        { id: 3, name: "Art & Culture" },
        { id: 4, name: "Technology" },
        { id: 5, name: "Health & Wellness" },
        { id: 6, name: "Film & Entertainment" },
        { id: 7, name: "Religion & Spirituality" },
        { id: 8, name: "Others" }
    ],
    selectedInterests: {},
    loading: false,
    error: null,
}

const headers = {
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': 'https://localhost:8080',
        'Access-Control-Allow-Credentials': false,
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }
};

const axiosInstance = axios.create({
    baseURL: API_LOCAL,
    headers: headers.headers,
    withCredentials: false,
    credentials: 'same-origin'
});

axiosInstance.interceptors.request.use(config => {
    config.fetchOptions = {
        mode: 'no-cors'
    };
    return config;
})

export const addUserInterest = createAsyncThunk('add_user_interest', async (data) => {
    const loginDetails = await AsyncStorage.getItem('qubeUserLoginDetails');
    const tokenDetails = JSON.parse(loginDetails);
    console.log("interest request", JSON.stringify(data))
    console.log("token: ", tokenDetails.token)
    const response = await axiosInstance.post('/interest', data, {
        ...headers.headers,
        'Authorization': `Bearer ${tokenDetails.token}`
    });
    console.log(headers)
    return response.data;
});

export const interestSlice = createSlice({
    name: 'interest',
    initialState,
    reducers: {
        selectInterest: (state, action) => {
            if (!state.selectedInterests.includes(action.payload))
                state.selectedInterests.push(action.payload)
        },
        removeInterest: (state, action) => {
            let newInterest = [...state.selectedInterests];
            let interestIdx = state.selectedInterests.findIndex(interest => interest.id == action.payload.id);
            if (interestIdx >= 0) {
                newInterest.splice(interestIdx, 1);
            } else {
                console.warn(`Cant remove interest (id: ${action.payload.id}) as its not in the list!`)
            }
            state.selectedInterests = newInterest;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(addUserInterest.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addUserInterest.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(addUserInterest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }


});
// exporting actions from the slice to be used in our components
export const { selectInterest, removeInterest } = interestSlice.actions;


export default interestSlice.reducer;