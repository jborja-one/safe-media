import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getAlbums, deleteAlbum } from '../../store/albums';
import CreateAlbumModal from '../CreateAlbum';

const GroupPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const albums = Object.values(useSelector((state) => state.albums));
	const users = Object.values(useSelector((state) => state.session));

	useEffect(() => {
		dispatch(getAlbums(id));
	}, [dispatch]);

	const handleDelete = (e) => {
		dispatch(deleteAlbum(id));
	};

	return (
		<>
			<div>
				<h1>My Albums</h1>
			</div>
			<div className='profile-page__container'>
				<div className='sidebar-container'>
					<div className='user-info__container'>
						{users?.map((user) => (
							<>
								<div className='groups-card'>
									<div className='user-name'>
										{user.first_name} {user.last_name}
									</div>
									<div className='user-email'>
										{user.email}
									</div>
								</div>
							</>
						))}
					</div>
				</div>
				<div className='groups-container'>
					<div className='group-card__container'>
						<CreateAlbumModal />
						{albums &&
							albums?.map((album) => (
								<>
									<div className='groups-card'>
										<Link
											className='card-link'
											to={`/albums/${album.id}`}
											key={album.id}>
											<div>
												<div>
													{album?.album_category}
												</div>
												<div>
													<img
														className='icon-img'
														src={
															album?.icon.img_url
														}></img>
												</div>
												<div>{album?.album_title}</div>
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
		</>
	);
};

export default GroupPage;
