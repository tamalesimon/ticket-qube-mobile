import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import layoutSlice from "./redux/layoutSlice";
import interestSlice from "./redux/interestSlice";
import eventsSlice from "./redux/eventsSlice";
import axios from "axios";

const store = configureStore({
    reducer: {
        auth: authSlice,
        layout: layoutSlice,
        interests: interestSlice,
        events: eventsSlice,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window?.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;