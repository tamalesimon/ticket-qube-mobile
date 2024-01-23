import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        eventSuggestions: {},
        eventId: null,
        status: null,
        eventTickets: null,
        selectedEventTitle: null,
        selectedEventDate: null,
        TicketAmount:null
    },
    reducers: {
        setEvents: (state, action) => {
            state.eventSuggestions = action.payload
            state.eventId = action.payload.eventId
            state.status = action.payload.status
        },
        setEventId: (state, action) => {
            state.eventId = action.payload
        },
        setEventTickets: (state, action) => {
            state.eventTickets = action.payload
        },
        setSelectedEventTitle: (state, action) => {
            state.selectedEventTitle = action.payload
        },
        setSelectedEventDate: (state, action) => {
            state.selectedEventDate = action.payload
        },
        

    }
})

export const { setEvents, setEventId, setEventTickets, setSelectedEventTitle, setSelectedEventDate } = eventSlice.actions;

export default eventSlice.reducer

export const selectCurrentEventId = (state) => state.events.eventId
export const selectCurrentUserEventSuggestions = (state) => state.events.eventSuggestions
export const selectCurrentEventTickets = (state) => state.events.eventTickets
export const selectSelectedEventTitle = (state) => state.events.selectedEventTitle
export const selectSelectedEventDate = (state) => state.events.selectedEventDate