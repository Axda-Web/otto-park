import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="border-b">
			<div className="flex justify-between items-center p-10 max-w-7xl m-auto">
				<Link to="/">
					<h1 className="font-black text-4xl">Otto</h1>
				</Link>
				<nav className="text-xl flex gap-x-14 uppercase underline">
          {/* Alyx: Add conditional navlink rendering for other pages */}
					<Link to="/login">Log in</Link>
				</nav>
			</div>
		</header>
	);
};
export default Header;
