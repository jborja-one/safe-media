import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { deleteAlbum } from '../../store/albums';
import './DeleteAlbum.css';
// import DeleteGroupModal from '.';

function DeleteAlbum({ albumId, setShowModal }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();

	const handleDelete = (e) => {
		const success = dispatch(deleteAlbum(albumId));
		if (success) {
			e.preventDefault();
			setShowModal(false);
			// return <Redirect to={``} />;
		} else {
			alert('Please try again');
		}
	};
	const handleCancel = (e) => {
		e.preventDefault();
		setShowModal(false);
	};
	return (
		<div className='delete-confirmation-container'>
			<div className='delete-confirmation-message'>
				<p className='confirmation-message'>
					Are you sure you want to delete this Album?
				</p>
			</div>
			<div className='confirmation-buttons'>
				<button
					className='delete-confirmation-button'
					onClick={handleDelete}>
					Delete
				</button>
				<button className='confirmation-button' onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default DeleteAlbum;