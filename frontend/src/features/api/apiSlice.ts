import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Tickets } from '../../types';

export const ticketsApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
	endpoints: (builder) => ({
		getTickets: builder.query<Tickets, number>({
			query: () => 'tickets',
		}),
	}),
});

export const { useGetTicketsQuery } = ticketsApi;
