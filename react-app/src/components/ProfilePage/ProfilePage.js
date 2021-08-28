import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getGroups, deleteGroup } from '../../store/groups';
import CreateGroupModal from '../CreateGroup';
import DeleteGroupModal from '../DeleteGroupModal';
import './ProfilePage.css';

const ProfilePage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const groups = Object.values(useSelector((state) => state.groups));
	const users = Object.values(useSelector((state) => state.session));

	useEffect(() => {
		dispatch(getGroups(id));
	}, [dispatch]);

	return (
		<>
			<div>
				<h1>My Groups</h1>
			</div>
			<div className='profile-page__container'>
				<div className='sidebar-container'>
					<div className='user-info__container'>
						{users?.map((user) => (
							<>
								<div className='groups-card'>
									<div className='user-name'>
										{user?.first_name} {user?.last_name}
									</div>
									<div className='user-email'>
										{user?.email}
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
											to={`/groups/${group.id}`}
											key={group.id}>
											<div>
												<div>
													{group?.group_category}
												</div>
												<div>
													<img
														className='icon-img'
														src={
															group?.icon.img_url
														}></img>
												</div>
												<div>{group?.group_title}</div>
											</div>
										</Link>
										<div>
											{/* <i className='far fa-trash-alt'></i> */}
											<DeleteGroupModal
												groupId={group.id}
											/>
										</div>
									</div>
								</>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
