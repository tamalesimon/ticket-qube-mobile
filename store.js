import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;