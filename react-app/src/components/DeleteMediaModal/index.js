import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteMedia from './DeleteMedia';
import './DeleteMedia.css';

function DeleteMediaModal({ mediaItemId }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div id='delete-button' onClick={() => setShowModal(true)}>
				<i className='far fa-trash-alt'></i>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<DeleteMedia
						mediaItemId={mediaItemId}
						setShowModal={setShowModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default DeleteMediaModal;
