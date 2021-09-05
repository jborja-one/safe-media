import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import { clearGroup } from '../../store/groups';
import { clearAlbums } from '../../store/albums';
import { clearMedia } from '../../store/media_items';

const LogoutButton = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const onLogout = async (e) => {
		await dispatch(logout());
		await dispatch(clearGroup());
		await dispatch(clearAlbums());
		await dispatch(clearMedia());
		history.push('/');
	};

	return (
		<div className='login-button' onClick={onLogout}>
			Logout
		</div>
	);
};

export default LogoutButton;
