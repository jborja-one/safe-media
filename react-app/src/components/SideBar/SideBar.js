import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getGroups } from '../../store/groups';
import './SideBar.css';

const SideBar = () => {
	const users = Object.values(useSelector((state) => state.session));
	const groups = Object.values(useSelector((state) => state.groups));
	const icons = Object.values(useSelector((state) => state.groupIcons));

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getGroups(id));
	}, [dispatch, id]);

	return (
		<>
			<div className='sidebar-container'>
				<div className='user-info__container'>
					<img
						alt=''
						className='profile-pic'
						src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/edit-profile-pic-removebg.png'
					/>
					{users?.map((user) => (
						<>
							<div className='groups-card'>
								<div className='user-name'>
									{user?.first_name} {user?.last_name}
								</div>
								<div className='user-email'>{user?.email}</div>
							</div>
						</>
					))}
					<div className='active-groups__container'>
						<h3 className='active-groups__title'>Active Groups</h3>
						<div className='active-groups'>
							<div className='active-group__list'>
								{groups &&
									groups?.map((group) => (
										<div className='active-group'>
											<Link
												className='card-link'
												to={`/groups/${group.id}`}
												key={group.id}>
												<div className='active-title'>
													<p className='link-text'>
														{group?.group_category}:{' '}
														{group?.group_title}
													</p>
												</div>
												<div className='active-icon-img'>
													{icons &&
														icons?.map((icon) => {
															return (
																<div
																	key={
																		icon.id
																	}>
																	{group.group_icon_id ===
																	icon.id ? (
																		<img
																			alt=''
																			key={
																				icon.id
																			}
																			className='icon-img'
																			src={
																				icon?.img_url
																			}></img>
																	) : null}
																</div>
															);
														})}
												</div>
											</Link>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
