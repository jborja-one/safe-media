import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getGroups } from '../../store/groups';
import { deleteGroup } from '../../store/groups';
import CreateGroupModal from '../CreateGroup';
import './ProfilePage.css';

const ProfilePage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const groups = Object.values(useSelector((state) => state.groups));

	useEffect(() => {
		dispatch(getGroups(id));
	}, [dispatch]);

	const handleDelete = (e) => {
		dispatch(deleteGroup(id));
	};

	return (
		<div className='profile-page__container'>
			<div className='sidebar-container'>
				<div className='user-info__container'>
					{groups?.map((group) => (
						<>
							<div className='groups-card'>
								<div className='user-name'>
									{group.user.first_name}{' '}
									{group.user.last_name}
								</div>
								<div className='user-email'>
									{group.user.email}
								</div>
							</div>
						</>
					))}
				</div>
			</div>
			<div className='groups-container'>
				<div className='group-card__container'>
					<CreateGroupModal />
					{groups &&
						groups?.map((group) => (
							<>
								<div className='groups-card'>
									<Link
										className='card-link'
										to={`/albums/${group.id}`}
										key={group.id}>
										<div>
											<div>{group?.group_category}</div>
											<div>
												<img
													src={
														group?.icon.img_url
													}></img>
											</div>
											<div>{group?.group_title}</div>
										</div>
									</Link>
									<i
										className='far fa-trash-alt'
										onClick={handleDelete}></i>
								</div>
							</>
						))}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
