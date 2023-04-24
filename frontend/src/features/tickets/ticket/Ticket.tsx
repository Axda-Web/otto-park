import { TicketType } from '../../../types';
import { Link } from 'react-router-dom';

const Ticket = ({ name, booked }: TicketType) => {
	return (
		<article
			className={`border flex flex-col align-middle p-10 gap-y-10 rounded-xl ${
				booked ? 'bg-red-500' : 'bg-green-500'
			}`}
		>
			<div className="text-center text-5xl font-bold text-white">{name}</div>
			{booked ? (
				<p className="text-center text-white">
					Not
					<br />
					Available
				</p>
			) : (
				<Link
					to="" // Alyx: isLoggedIn ? '/booking' : '/login'
					className="uppercase bold bg-black text-white block w-fit mx-auto	px-10 py-4 rounded"
				>
					Book
				</Link>
			)}
		</article>
	);
};
export default Ticket;
