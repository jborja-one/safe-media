import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteGroup from './DeleteGroup';
import './DeleteGroup.css';

function DeleteGroupModal({ groupId }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div id='delete-button' onClick={() => setShowModal(true)}>
				<i className='far fa-trash-alt fa-md'></i>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<DeleteGroup
						groupId={groupId}
						setShowModal={setShowModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default DeleteGroupModal;
