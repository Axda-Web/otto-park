import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

import Header from './components/header';
import Footer from './components/footer';
import Root from './routes/root';
import Login from './routes/login';
import Signup from './routes/signup';
import Booking from './routes/booking';
import Profile from './routes/profile';
import Error from './routes/error';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		),
		children: [
			{
				path: '/',
				element: <Root />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <Signup />,
			},
			{
				path: '/booking',
				element: <Booking />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '*',
				element: <Error />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
