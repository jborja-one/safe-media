import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateGroup from './CreateGroup';
import './CreateGroup.css';

function CreateGroupModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='login-button' onClick={() => setShowModal(true)}>
				<i class='far fa-plus-square'></i>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='login-title-container'>
						<h3 className='login-title'>Create a Group</h3>
					</div>
					<CreateGroup setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default CreateGroupModal;
