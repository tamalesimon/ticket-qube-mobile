import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    tickets: [],
    totalAmount: 0.00,
    totalTickets: 0,
    totalSpots: 0,
    totalSpotsAvailable: 0,
    errors: null
});

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }
});

export const fetchAvailableTickets = createAsyncThunk('ticket/fetchAvailableTickets', async (eventId) => {
    try {
        const response = await axiosInstance.get(`/tickets/${eventId}`);
        return response.data;
    } catch (error) {
        throw error.response.data.message
    }
})

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        addTicket: (state, action) => {
            state.tickets = [...state.tickets, action.payload]
        },
        removeTicket: (state, action) => {
            let newTicket = [...state.tickets];
            let ticketIdx = state.items.findIndex(ticket => ticket.id == action.payload.id);
            if (ticketIdx >= 0) {
                newTicket.splice(ticketIdx, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.payload.id}) as its not in the basket!`)
            }
            state.tickets = newTicket;
        },
        emptyTickets: (state, action) => {
            state.tickets = [];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAvailableTickets.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchAvailableTickets.fulfilled, (state, action) => {
                state.loading = false;
                state.tickets = action.payload.tickets;
            })
            .addCase(fetchAvailableTickets.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
    }
})

export const { addTicket, removeTicket, emptyTickets } = ticketSlice.actions;