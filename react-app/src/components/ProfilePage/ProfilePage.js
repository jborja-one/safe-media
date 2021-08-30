import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getGroups, deleteGroup } from '../../store/groups';
import CreateGroupModal from '../CreateGroup';
import DeleteGroupModal from '../DeleteGroupModal';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
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
			<div className='profile-page__container'>
				<SideBar />
				<div className='groups-container'>
					<div className='page-title'>
						<h1>My Groups</h1>
					</div>
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
												<div className='group-category'>
													{group?.group_category}
												</div>
												<div>
													<img
														className='icon-img'
														src={
															group?.icon.img_url
														}></img>
												</div>
											</div>
										</Link>
										<div className='delete-and-title'>
											<div>{group?.group_title}</div>
											<div>
												<DeleteGroupModal
													groupId={group.id}
												/>
											</div>
										</div>
									</div>
								</>
							))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProfilePage;
