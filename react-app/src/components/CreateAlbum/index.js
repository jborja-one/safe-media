import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateAlbum from './CreateAlbum';
// import './CreateGroup.css';

function CreateAlbumModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='login-button' onClick={() => setShowModal(true)}>
				<img
					className='add-icon'
					src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/add-item-removebg.png'
				/>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='login-title-container'>
						<h3 className='login-title'>Create an Album</h3>
					</div>
					<CreateAlbum setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default CreateAlbumModal;
