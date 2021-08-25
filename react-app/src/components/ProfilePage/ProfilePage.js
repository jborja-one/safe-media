import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getGroups } from '../../store/groups';

const ProfilePage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const groups = Object.values(useSelector((state) => state.groups));
	console.log('------------------------------------');
	console.log(groups, '*******');
	console.log('------------------------------------');

	useEffect(() => {
		dispatch(getGroups(id));
	}, [dispatch]);

	return (
		<div className='groups-container'>
			<div className='group-card__container'>
				{groups &&
					groups?.map((group) => (
						<>
							<div className='groups-card'>
								<Link
									className='card-link'
									to={`/albums/${group.id}`}
									key={group.id}>
									<div>
										{group?.category}
										{group?.group_icon_id !== undefined && (
											<img
												className='group-image'
												src={group.group_icon_id}
											/>
										)}
										{group?.title}
									</div>
								</Link>
							</div>
						</>
					))}
			</div>
		</div>
	);
};

export default ProfilePage;
