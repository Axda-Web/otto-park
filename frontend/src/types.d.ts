import { z } from 'zod';

const ticketSchema = z.object({
	id: z.number(),
	name: z.string(),
	booked: z.boolean(),
	user: z.string().optional(),
	arrival: z.date().optional(),
	departure: z.date().optional(),
});

export const ticketsSchema = z.array(ticketSchema);

export type TicketType = z.infer<typeof ticketSchema>;
export type Tickets = z.infer<typeof ticketsSchema>;
