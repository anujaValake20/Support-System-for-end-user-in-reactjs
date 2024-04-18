import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    addTicket(state, action) {
      state.tickets.push(action.payload);
    },
    updateTicket(state, action) {
        const { id, newData } = action.payload;
        const index = state.tickets.findIndex(ticket => ticket.id === id);
        
        if (index !== -1) {
          state.tickets[index] = { ...state.tickets[index], ...newData };
        }
    },
   
  },
});

export const { addTicket, updateTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
