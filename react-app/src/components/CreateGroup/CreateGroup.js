import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createGroup } from '../../store/groups';
import { getIcons } from '../../store/group_icons';

// grab session instead of groups, and session.user.id

const CreateGroup = ({ setShowModal }) => {
	const session = useSelector((state) => state.session.user);
	const groupIcons = Object.values(useSelector((state) => state.groupIcons));

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIcons());
	}, [dispatch]);

	const [errors, setErrors] = useState([]);
	const [category, setCategory] = useState('');
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		// debugger;
		const data = await dispatch(
			createGroup(category, title, icon, session.id)
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
						placeholder='Group Category'
						type='text'
						name='category'
						onChange={updateCategory}
						value={category}
						required></input>
				</div>
				<div>
					<input
						className='form-input'
						placeholder='Group Title'
						type='text'
						name='title'
						onChange={updateTitle}
						value={title}
						required></input>
				</div>
				<div>
					<select
						className='form-input'
						placeholder='Group Icon'
						type='text'
						name='icon'
						onChange={updateIcon}
						value={icon}
						required>
						<option value='' disabled selected>
							Select an Icon
						</option>
						{groupIcons?.map((icon) => {
							return (
								<option key={icon.id} value={icon.id}>
									{icon.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className='add-restaurant__button-container'>
					<button id='restaurant-submit-button' type='submit'>
						Create Group
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateGroup;
