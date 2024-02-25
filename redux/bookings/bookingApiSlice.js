import { apiSlice } from "../api/apiSlice";
import { paymentsApiSlice } from "../payments/paymentApiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPastBooking: builder.query({
            query: () => ({
                url: `/booking/past`,
                method: 'GET',
            })
        }),
        getBookingById: builder.query({
            query: (bookingId) => ({
                url: `/booking/${bookingId}`,
                method: 'GET'
            })
        }),
        getActiveBookings: builder.query({
            query: () => ({
                url: '/booking/active',
                method: 'GET'
            })
        })
    })
})

export const {
    useGetPastBookingQuery,
    useGetBookingByIdQuery
} = paymentsApiSlice;

// Use the data in components like this