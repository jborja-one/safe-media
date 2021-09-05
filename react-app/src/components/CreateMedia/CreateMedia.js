import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createMedia } from '../../store/media_items';

const CreateMedia = ({ setShowModal }) => {
	const session = useSelector((state) => state.session.user);
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const [errors, setErrors] = useState([]);
	const [itemName, setItemName] = useState('');
	const [itemUrl, setItemUrl] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(
			createMedia(itemName, itemUrl, id, session.id)
		);

		setShowModal(false);
		history.go(0);
		if (data?.errors) {
			setErrors(data.errors);
		} else if (data) {
			setShowModal(false);
		}
	};

	const updateItemName = (e) => setItemName(e.target.value);
	const updateItemUrl = (e) => setItemUrl(e.target.value);

	return (
		<div className='group-form__container'>
			<form onSubmit={handleSubmit} className='group-form'>
				{errors?.map((error, ind) => (
					<div key={ind}>{error}</div>
				))}
				<div>
					<input
						className='form-input'
						placeholder='Media Name'
						type='text'
						name='itemName'
						onChange={updateItemName}
						value={itemName}
						required></input>
				</div>
				<div>
					<input
						className='form-input'
						placeholder='Media URL'
						type='text'
						name='title'
						onChange={updateItemUrl}
						value={itemUrl}
						required></input>
				</div>
				<div className='button-container'>
					<button className='user-login-button' type='submit'>
						Upload Media
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateMedia;
