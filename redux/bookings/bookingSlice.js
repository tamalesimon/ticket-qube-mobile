import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "bookings",
    initialState: {
        pastBookings: {},
        currentBooking: {},
        bookingId: "",
        qrCodeUrl: ""
    },
    reducers: {
        setPastBookings: (state, action) => {
            state.pastBookings = action.payload;
        },
        setCurrentBooking: (state, action) => {
            state.currentBooking = action.payload
        },
        setBookingId: (state, action) => {
            state.bookingId = action.payload
        }
    }
})

export const {
    setPastBookings,
    setCurrentBooking,
    setBookingId
} = bookingSlice.actions;

export default bookingSlice.reducer;

export const selectPastBookings = state => state.bookings.pastBookings;
export const selectCurrentBooking = state => state.bookings.currentBooking;
export const selectBookingId = state => state.bookings.bookingId;
export const selectQRCodeUrl = state => state.bookings.qrCodeUrl;