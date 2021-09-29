import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditGroup from './EditGroup';
import './EditGroup.css';

function EditGroupModal({ groupId }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div id='delete-button' onClick={() => setShowModal(true)}>
				<i className='fas fa-pencil-alt'></i>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='login-title-container'>
						<h3 className='login-title'>Update a Group</h3>
					</div>
					<EditGroup groupId={groupId} setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default EditGroupModal;
