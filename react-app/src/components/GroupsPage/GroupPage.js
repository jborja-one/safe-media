import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getAlbums } from '../../store/albums';
import { getGroups } from '../../store/groups';
import CreateAlbumModal from '../CreateAlbum';
import DeleteAlbumModal from '../DeleteAlbumModal';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import './GroupPage.css';

const GroupPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const albums = Object.values(useSelector((state) => state.albums));
	const icons = Object.values(useSelector((state) => state.albumIcons));
	const groups = Object.values(useSelector((state) => state.groups));

	useEffect(() => {
		dispatch(getAlbums(id));
	}, [dispatch]);

	return (
		<>
			<div className='profile-page__container'>
				<SideBar />
				<div className='groups-container'>
					<div className='page-title'>
						<h1>My Albums</h1>
					</div>
					<div className='group-card__container'>
						<CreateAlbumModal props={{ id }} />
						{albums &&
							albums?.map((album) => (
								<>
									<div key={album.id} className='groups-card'>
										<Link
											className='card-link'
											to={`/albums/${album.id}`}
											key={album.id}>
											<div>
												<div>
													{album?.album_category}
												</div>
												<div>
													{icons &&
														icons?.map((icon) => {
															return (
																<div
																	key={
																		icon.id
																	}>
																	{album.album_icon_id ===
																	icon.id ? (
																		<img
																			className='icon-img'
																			src={
																				icon.img_url
																			}></img>
																	) : null}
																</div>
															);
														})}
												</div>
												<div>{album?.album_title}</div>
											</div>
										</Link>
										<DeleteAlbumModal albumId={album.id} />
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

export default GroupPage;
