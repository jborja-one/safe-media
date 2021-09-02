import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMedia } from '../../store/media_items';
import CreateMediaModal from '../CreateMedia';
import DeleteMediaModal from '../DeleteMediaModal';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const MediaPage = () => {
	const media_items = Object.values(useSelector((state) => state.media));
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMedia(id));
	}, [dispatch]);

	return (
		<>
			<div className='profile-page__container'>
				{/* <SideBar /> */}
				<div className='groups-container'>
					<div className='page-title'>
						<h1>My Safe Media</h1>
					</div>
					<div className='group-card__container'>
						<CreateMediaModal />
						{media_items &&
							media_items?.map((item) => (
								<>
									<div className='groups-card'>
										<div>
											<div>
												<img
													className='icon-img'
													src={item?.item_url}></img>
											</div>
											<div className='delete-and-title'>
												{item?.item_name}
												<DeleteMediaModal />
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

export default MediaPage;
