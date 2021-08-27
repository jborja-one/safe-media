const LOAD_ALBUM_ICONS = 'icons/LOAD_ALBUM_ICONS';

const loadAlbumIcons = (icons) => ({
	type: LOAD_ALBUM_ICONS,
	icons,
});

export const getIcons = () => async (dispatch) => {
	const res = await fetch('/api/album_icons');

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
		default:
			return state;
	}
};

export default getAlbumIconsReducer;
