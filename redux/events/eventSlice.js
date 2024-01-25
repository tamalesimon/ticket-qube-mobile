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
        totalTicketAmount: 0,
        plusOne: 0
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
        setTotalTicketAmount: (state, action) => {
            state.totalTicketAmount = action.payload
        },
        setTotalPlusOne: (state, action) => {
            state.plusOne = action.payload
        }

    }
})

export const {
    setEvents,
    setEventId,
    setEventTickets,
    setSelectedEventTitle,
    setSelectedEventDate,
    setTotalTicketAmount,
    setTotalPlusOne
} = eventSlice.actions;

export default eventSlice.reducer

export const selectCurrentEventId = (state) => state.events.eventId
export const selectCurrentUserEventSuggestions = (state) => state.events.eventSuggestions
export const selectCurrentEventTickets = (state) => state.events.eventTickets
export const selectSelectedEventTitle = (state) => state.events.selectedEventTitle
export const selectSelectedEventDate = (state) => state.events.selectedEventDate
export const selectTotalTicketAmount = (state) => state.events.totalTicketAmount
export const selectPlusOne = (state) => state.events.plusOne