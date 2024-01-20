import { apiSlice } from "../api/apiSlice";

export const eventsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEventsUpcoming: builder.mutation({
            query: () => ({
                url: '/events',
                method: 'GET',
            }),
        }),
        getEventSuggestions: builder.mutation({
            query: queryOption => ({
                url: `/client-event/_search/${queryOption}`,
                method: 'GET',
            }),
        }),
        getEventById: builder.mutation({
            query: eventId => ({
                url: `/client-event/${eventId}`,
                method: 'GET',
            }),
        }),
        createEvent: builder.mutation({
            query: (body) => ({
                url: '/events',
                method: 'POST',
                body
            }),
        }),
        updateEvent: builder.mutation({
            query: (body) => ({
                url: '/events',
                method: 'PUT',
                body
            }),
        }),
        deleteEvent: builder.mutation({
            query: (id) => ({
                url: `/events/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetEventsUpcomingMutation,
    useGetEventSuggestionsMutation,
    useGetEventByIdMutation,
    useCreateEventMutation,
    useUpdateEventMutation,
    useDeleteEventMutation
} = eventsApiSlice;