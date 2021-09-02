import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom';
import { getMedia } from '../../store/media_items';
import CreateMediaModal from '../CreateMedia';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const MediaPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const albums = Object.values(useSelector((state) => state.albums));
	const media_items = Object.values(useSelector((state) => state.media));

	useEffect(() => {
		dispatch(getMedia(id));
	}, [dispatch]);

	// debugger;

	return (
		<>
			<div className='profile-page__container'>
				<SideBar />
				<div className='groups-container'>
					<div className='page-title'>
						<h1>My Safe Media</h1>
					</div>
					<div className='group-card__container'>
						{/* update with create media modal */}
						<CreateMediaModal />
						{media_items &&
							media_items?.map((item) => (
								<>
									<div className='groups-card'>
										<div>
											<div>{item?.item_name}</div>
											<div>
												<img
													className='icon-img'
													src={item?.item_url}></img>
											</div>
										</div>

										{/* <DeleteAlbumModal /> */}
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

export default MediaPage;
