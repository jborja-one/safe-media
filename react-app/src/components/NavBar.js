import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import UserLoginModal from './UserLoginModal';

const NavBar = () => {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (!sessionUser) {
		sessionLinks = (
			<>
				<NavLink to='/' exact={true} activeClassName='active'>
					Login
					<UserLoginModal />
				</NavLink>
				<NavLink to='/' exact={true} activeClassName='active'>
					Sign Up
				</NavLink>
			</>
		);
	} else {
		<LogoutButton />;
	}

	return (
		<nav>
			<>
				<NavLink to='/' exact={true} activeClassName='active'>
					<img
						src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/safemedia-favicon-nobg.png'
						width='80px'
					/>
				</NavLink>
				<div>{sessionLinks}</div>
			</>
		</nav>
	);
};

export default NavBar;
