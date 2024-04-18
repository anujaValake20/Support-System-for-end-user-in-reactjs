import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import ticketReducer from '../reducers/ticketReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
  },
});

export default store;