import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bg-black p-10 space-y-3">
			<Link to="/">
				<h1 className="font-black text-4xl text-white text-center">Otto</h1>
			</Link>
            <p className="text-white text-center">Copyright © 2023</p>
		</footer>
	);
};
export default Footer;
