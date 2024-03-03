import { apiSlice } from "../api/apiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBookingById: builder.mutation({
            query: (bookingId) => ({
                url: `/booking/${bookingId}`,
                method: 'GET'
            })
        }),
    })
})

export const {
    useGetBookingByIdMutation
} = bookingApiSlice;

// Use the data in components like this