import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './UserLoginModal';
import './UserLoginModal.css';

function UserLoginModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='login-button' onClick={() => setShowModal(true)}>
				Login
			</div>
			{/* {showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='login-title-container'>
						<h3 className='login-title'>Login to Safe Media</h3>
					</div>
					<LoginForm setShowModal={setShowModal} />
				</Modal>
			)} */}
		</>
	);
}

export default UserLoginModal;
