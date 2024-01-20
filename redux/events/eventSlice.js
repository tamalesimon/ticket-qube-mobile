import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        eventSuggestions: {},
        eventId: null,
        status: null
    },
    reducers: {
        setEvents: (state, action) => {
            state.eventSuggestions = action.payload
            state.eventId = action.payload.eventId
            state.status = action.payload.status
        },
        setEventId: (state, action) => {
            state.eventId = action.payload
        }
    }
})

export const { setEvents, setEventId } = eventSlice.actions;

export default eventSlice.reducer

export const selectCurrentEventId = (state) => state.events.eventId
export const selectCurrentUserEventSuggestions = (state) => state.events.eventSuggestions