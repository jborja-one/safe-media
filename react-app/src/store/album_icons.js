import { LOAD_ALBUMS } from './albums';
const LOAD_ALBUM_ICONS = 'icons/LOAD_ALBUM_ICONS';

const loadAlbumIcons = (icons) => ({
	type: LOAD_ALBUM_ICONS,
	icons,
});

export const getIcons = () => async (dispatch) => {
	const res = await fetch('/api/album_icons/');

	if (res.ok) {
		const icons = await res.json();
		dispatch(loadAlbumIcons(icons.icons));
		return res;
	}
};

const getAlbumIconsReducer = (state = [], action) => {
	switch (action.type) {
		case LOAD_ALBUM_ICONS: {
			const allIcons = [...action.icons];
			return allIcons;
		}
		case LOAD_ALBUMS: {
			const { icons } = action.albums;
			return { ...state, ...icons };
		}
		default:
			return state;
	}
};

export default getAlbumIconsReducer;
