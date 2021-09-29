import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editGroup } from '../../store/groups';
import { getIcons } from '../../store/group_icons';
import './EditGroup.css';

const EditGroup = ({ setShowModal, groupId }) => {
	const session = useSelector((state) => state.session.user);
	const groupIcons = Object.values(useSelector((state) => state.groupIcons));
	const group = useSelector((state) => state.groups[groupId]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIcons());
	}, [dispatch]);
	// debugger;
	const [errors, setErrors] = useState([]);
	const [category, setCategory] = useState(group.group_category);
	const [title, setTitle] = useState(group.group_title);
	const [icon, setIcon] = useState(groupIcons[0].name);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(
			editGroup(groupId, category, title, icon, session.id)
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
						<option key={icon.id} value='' disabled selected>
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
				<div className='button-container'>
					<button className='user-login-button' type='submit'>
						Update Group
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditGroup;
