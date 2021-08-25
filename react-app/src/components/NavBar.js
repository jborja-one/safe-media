import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import UserLoginModal from './UserLoginModal';
import UserSignUpForm from './UserSignUpFormModal';

const NavBar = () => {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (!sessionUser) {
		sessionLinks = (
			<div className='navbar-container'>
				<NavLink
					to='/'
					exact={true}
					activeClassName='active'
					className='navbar-links'>
					{' '}
				</NavLink>
				<UserLoginModal />
				<NavLink to='/' exact={true} activeClassName='active'>
					<img
						className='navbar-logo'
						src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/safemedia-favicon-nobg.png'
						width='80px'
					/>
				</NavLink>
				<NavLink
					to='/'
					exact={true}
					activeClassName='active'
					className='navbar-links'></NavLink>
				<UserSignUpForm />
			</div>
		);
	} else {
		<LogoutButton />;
	}

	return (
		<>
			<div>{sessionLinks}</div>
		</>
	);
};

export default NavBar;
