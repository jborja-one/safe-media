const LOAD_ALBUMS = 'albums/LOAD_ALBUMS';

const load_albums = (albums) => ({
	type: LOAD_ALBUMS,
	albums,
});

export const getAlbums = (id) => async (dispatch) => {
	const res = await fetch(`/api/albums/${id}`);

	if (res.ok) {
		const albums = await res.json();
		dispatch(load_albums(albums));
		return res;
	}
};

const albumReducer = (state = {}, action) => {
	if (!action) return state;
	switch (action.type) {
		case LOAD_ALBUMS: {
			const new_state = {};
			action.albums.forEach((album) => {
				new_state[album.id] = album;
			});
			return new_state;
		}
		default:
			return state;
	}
};

export default albumReducer;
