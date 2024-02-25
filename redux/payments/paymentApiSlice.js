import { apiSlice } from "../api/apiSlice";

export const paymentsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        bookTicket: builder.mutation({
            query: (paymentObject) => ({
                url: `/booking`,
                method: 'POST',
                body: paymentObject
            }),
        }),
    })
})

export const {
    useBookTicketMutation,
} = paymentsApiSlice;



