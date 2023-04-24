import { configureStore } from '@reduxjs/toolkit';
import { ticketsApi } from './features/api/apiSlice';

const store = configureStore({
	reducer: {
		[ticketsApi.reducerPath]: ticketsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ticketsApi.middleware),
});

export default store;
