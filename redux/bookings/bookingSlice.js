import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "bookings",
    initialState: {
        pastBookings: null,
        currentBookings: null,
        bookingId: null,
        qrCodeUrl: null
    },
    reducers: {
        setPastBookings: (state, action) => {
            state.pastBookings = action.payload;
        },
        setCurrentBookings: (state, action) => {
            state.currentBookings = action.payload
        },
        setBookingId: (state, action) => {
            state.bookingId = action.payload
        }
    }
})

export const {
    setPastBookings,
    setCurrentBookings,
    setBookingId
} = bookingSlice.actions;

export default bookingSlice.reducer;

export const selectPastBookings = state => state.bookings.pastBookings;
export const selectCurrentBookings = state => state.bookings.currentBookings;
export const selectBookingId = state => state.bookings.bookingId;
export const selectQRCodeUrl = state => state.bookings.qrCodeUrl;