import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteGroup } from '../../store/groups';
import './DeleteGroup.css';

function DeleteGroup({ groupId, setShowModal }) {
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		const success = dispatch(deleteGroup(groupId));
		if (success) {
			e.preventDefault();
			setShowModal(false);
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
					Are you sure you want to delete this Group?
				</p>
			</div>
			<div className='confirmation-buttons'>
				<button
					className='delete-confirmation-button'
					onClick={handleDelete}>
					Delete
				</button>
				<button
					className='delete-confirmation-button'
					onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default DeleteGroup;
