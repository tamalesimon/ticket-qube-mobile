import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./redux/api/apiSlice";
import authSlice from "./redux/auth/authSlice";
// import authSlice from "./redux/authSlice";
import layoutSlice from "./redux/layoutSlice";
import interestSlice from "./redux/interestSlice";
import eventsSlice from "./redux/eventsSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        layout: layoutSlice,
        interests: interestSlice,
        events: eventsSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;