import { HashLink } from 'react-router-hash-link';
import TicketsList from '../../features/tickets/tickets-list';

const Root = () => {
	return (
		<main>
			<section className="flex flex-col align-center h-[calc(100vh-120px)] pt-80 gap-y-20">
				<h2 className="capitalize text-center text-9xl font-bold">
					Parking made easy
				</h2>
				<HashLink
					smooth
					to="#parking-spot-picking"
					className="text-xl bg-black text-white block w-fit mx-auto	px-10 py-4 rounded uppercase"
				>
					Book a space
				</HashLink>
			</section>
			<section id="parking-spot-picking" className="h-screen bg-gray-100 p-20 relative">
				<h2 className="text-center text-5xl font-bold">
					Just pick a spot and you're good to go!
				</h2>
				<TicketsList />
			</section>
		</main>
	);
};

export default Root;
