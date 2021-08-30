import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getAlbums, deleteAlbum } from '../../store/albums';
import CreateAlbumModal from '../CreateAlbum';
import DeleteAlbumModal from '../DeleteAlbumModal';
import DeleteAlbum from '../DeleteAlbumModal/DeleteAlbum';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import './GroupPage.css';

const GroupPage = (group) => {
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
			<div className='profile-page__container'>
				<SideBar />
				<div className='groups-container'>
					<div className='page-title'>
						<h1>My Albums</h1>
					</div>
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
										<DeleteAlbumModal />
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
