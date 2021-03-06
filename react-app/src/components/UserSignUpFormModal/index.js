import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './UserSignUpForm';
import './UserSignUpForm.css';

function UserSignUpFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='login-button' onClick={() => setShowModal(true)}>
				Sign Up
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='signup-title-container'>
						<h3 className='signup-title'>Sign Up for Safe Media</h3>
					</div>
					<SignUpForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default UserSignUpFormModal;
