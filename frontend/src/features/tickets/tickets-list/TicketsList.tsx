import { useGetTicketsQuery } from '../../api/apiSlice';
import { Triangle } from 'react-loader-spinner';

import Ticket from '../ticket/Ticket';

const TicketsList = () => {
	const { data, error, isLoading } = useGetTicketsQuery();

	if (isLoading || error)
		return (
			<div className="absolute top-96 left-1/2 transform -translate-x-1/2">
				{isLoading ? (
					<Triangle color="black" height="150" width="150" />
				) : (
					<p className="text-2xl font-bold">Something went wrong...</p>
				)}
			</div>
		);

	const tickets = data?.map((ticket) => <Ticket key={ticket.id} {...ticket} />);

	return <div className="grid grid-cols-6 gap-10 mt-20">{tickets}</div>;
};
export default TicketsList;
