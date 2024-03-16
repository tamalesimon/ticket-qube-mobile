import { apiSlice } from "../api/apiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserBookings: builder.query({
            query: () => ({
                url: '/booking',
                method: 'GET'
            })
        }),
        getBookingById: builder.mutation({
            query: (bookingId) => ({
                url: `/booking/${bookingId}`,
                method: 'GET'
            })
        }),
    })
})

export const {
    useGetUserBookingsQuery,
    useGetBookingByIdMutation
} = bookingApiSlice;

// Use the data in components like this