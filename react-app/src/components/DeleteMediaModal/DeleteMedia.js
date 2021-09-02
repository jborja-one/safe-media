import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { deleteMedia } from '../../store/media_items';
import './DeleteMedia.css';
// import DeleteGroupModal from '.';

function DeleteMedia({ mediaItemId, setShowModal }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleDelete = (e) => {
		const success = dispatch(deleteMedia(mediaItemId));
		if (success) {
			e.preventDefault();
			setShowModal(false);
			history.go(0);
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
					Are you sure you want to delete this Image?
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

export default DeleteMedia;
