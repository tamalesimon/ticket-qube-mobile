import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payments',
    initialState: {
        paymentMethods: [{
            id: 1,
            name: "Card",
            icon: "MasterCardVisa"
        }, {
            id: 2,
            name: "MoMo",
            icon: "MTN"
        }, {
            id: 3,
            name: "Airtel",
            icon: "Airtel"
        }, {
            id: 4,
            name: "Apple pay",
            icon: "ApplePay"
        }, {
            id: 5,
            name: "PayPal",
            icon: "PayPal"
        }, {
            id: 6,
            name: "Payoneer",
            icon: "Payoneer"
        }],
        paymentMethod: null,
        paymentStatus: null,
        paymentError: null
    },
    reducers: {
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
        },
        setPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload
        },
        setPaymentError: (state, action) => {
            state.paymentError = action.payload
        },
    }
})

export const { setPaymentMethod, setPaymentStatus, setPaymentError } = paymentSlice.actions;
export default paymentSlice.reducer;

export const selectPaymentMethods = state => state.payments.paymentMethods
export const selectPaymentMethod = state => state.payments.paymentMethod