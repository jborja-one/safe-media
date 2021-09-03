import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createAlbum } from '../../store/albums';
import { getIcons } from '../../store/album_icons';

const CreateAlbum = ({ props, setShowModal }) => {
	const albums = Object.values(useSelector((state) => state.albums));
	const albumIcons = Object.values(useSelector((state) => state.albumIcons));
	const groups = Object.values(useSelector((state) => state.groups));

	const dispatch = useDispatch();
	// const { id } = useParams;

	useEffect(() => {
		dispatch(getIcons());
	}, [dispatch]);
	// debugger;
	console.log('------------------------------------');
	console.log(props.props.id);
	console.log('------------------------------------');
	const [errors, setErrors] = useState([]);
	const [category, setCategory] = useState('');
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(
			createAlbum(category, title, icon, props.props.id)
		);
		setShowModal(false);
		if (data?.errors) {
			setErrors(data.errors);
		} else if (data) {
			setShowModal(false);
		}
	};

	const updateCategory = (e) => setCategory(e.target.value);
	const updateTitle = (e) => setTitle(e.target.value);
	const updateIcon = (e) => setIcon(e.target.value);

	return (
		<div className='group-form__container'>
			<form onSubmit={handleSubmit} className='group-form'>
				{errors?.map((error, ind) => (
					<div key={ind}>{error}</div>
				))}
				<div>
					<input
						className='form-input'
						placeholder='Album Category'
						type='text'
						name='category'
						onChange={updateCategory}
						value={category}
						required></input>
				</div>
				<div>
					<input
						className='form-input'
						placeholder='Album Title'
						type='text'
						name='title'
						onChange={updateTitle}
						value={title}
						required></input>
				</div>
				<div>
					<select
						className='form-input'
						placeholder='Album Icon'
						type='text'
						name='icon'
						onChange={updateIcon}
						value={icon}
						required>
						<option value='' disabled selected>
							Select an Icon
						</option>
						{albumIcons?.map((icon) => {
							return (
								<option key={icon.id} value={icon.id}>
									{icon.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className='button-container'>
					<button className='user-login-button' type='submit'>
						Create Album
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateAlbum;
