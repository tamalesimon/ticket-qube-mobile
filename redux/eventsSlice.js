import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    item: null,
    events: [],
    eventsUpcoming: [],
    eventsSuggestion: [],
    eventsPast: [],
    eventsTicket: [],
    loading: false,
    error: null,
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }
});

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
    try {
        const response = await axiosInstance.get('/events');
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
});

export const fetchEventsUpcoming = createAsyncThunk('events/fetchEventsUpcoming', async () => {
    try {
        const response = await axiosInstance.get('/events/upcoming');
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
});

export const fetchEventsSuggestion = createAsyncThunk('events/fetchEventsSuggestion', async () => {
    try {
        const response = await axiosInstance.get('/events/suggestion');
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
});

export const fetchEventsPast = createAsyncThunk('events/fetchEventsPast', async () => {
    try {
        const response = await axiosInstance.get('/events/past');
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
});

export const fetchEventById = createAsyncThunk("events/byId",  async () => {
    try {
        const response = await axiosInstance.get('/events/:id');
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
})

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
        editEvent: (state, action) => {
            const { id, title, description, date, location, image, price, category } = action.payload;
            const existingEvent = state.events.find(event => event.id === id);
            if (existingEvent) {
                existingEvent.title = title;
                existingEvent.description = description;
                existingEvent.date = date;
                existingEvent.location = location;
                existingEvent.image = image;
                existingEvent.price = price;
                existingEvent.category = category;
            }
        },
        deleteEvent: (state, action) => {
            const { id } = action.payload;
            const existingEvent = state.events.find(event => event.id === id);
            if (existingEvent) {
                state.events = state.events.filter(event => event.id !== id);
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchEvents.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchEventsUpcoming.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchEventsUpcoming.fulfilled, (state, action) => {
                state.loading = false;
                state.eventsUpcoming = action.payload;
            })
            .addCase(fetchEventsUpcoming.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchEventsSuggestion.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchEventsSuggestion.fulfilled, (state, action) => {
                state.loading = false;
                state.eventsSuggestion = action.payload;
            })
            .addCase(fetchEventsSuggestion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchEventsPast.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchEventsPast.fulfilled, (state, action) => {
                state.loading = false;
                state.eventsPast = action.payload;
            })
            .addCase(fetchEventsPast.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export const selectEventById = (state, id) => state.events.filter(item => item.id == id);
export const selectEvents = state => state.events;
export const selectEventsUpcoming = state => state.eventsUpcoming;
export const selectEventsSuggestion = state => state.eventsSuggestion;
export const selectEventsPast = state => state.eventsPast;


export default eventSlice.reducer