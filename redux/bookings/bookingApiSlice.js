import { apiSlice } from "../api/apiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserActiveBookings: builder.query({
            query: () => ({
                url: '/booking/active',
                method: 'GET',
                params: {
                    size: 5,
                    totalPagess: 14
                }
            })
        }),
        getUserPastBookings: builder.query({
            query: () => ({
                url: '/booking/past',
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
    useGetUserActiveBookingsQuery,
    useGetUserPastBookingsQuery,
    useGetBookingByIdMutation
} = bookingApiSlice;

// Use the data in components like this