import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import layoutSlice from "./redux/layoutSlice";
import axios from "axios";

const store = configureStore({
    reducer: {
        auth: authSlice,
        layout: layoutSlice
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window?.__REDUX_DEVTOOLS_EXTENSION__()
});

axios.interceptors.request.use((config)=> {
    const { auth } = store.getState();
    const token = auth.token;

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return token ? { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } } : config;
})

export default store;