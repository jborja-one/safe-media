import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteAlbum from './DeleteAlbum';
import './DeleteAlbum.css';

function DeleteAlbumModal({ groupId }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div id='delete-button' onClick={() => setShowModal(true)}>
				<i className='far fa-trash-alt'></i>
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<DeleteAlbum
						groupId={groupId}
						setShowModal={setShowModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default DeleteAlbumModal;
