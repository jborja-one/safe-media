const LOAD_ALBUMS = 'albums/LOAD_ALBUMS';
const CREATE_ALBUMS = 'albums/CREATE_ALBUMS';
const DELETE_ALBUMS = 'albums/DELETE_ALBUMS';

const load_albums = (albums) => ({
	type: LOAD_ALBUMS,
	albums,
});

const create_album = (albums) => ({
	type: CREATE_ALBUMS,
	albums,
});

const delete_album = (albumId) => ({
	type: DELETE_ALBUMS,
	albumId,
});

export const getAlbums = (id) => async (dispatch) => {
	const res = await fetch(`/api/albums/${id}`);

	if (res.ok) {
		const albums = await res.json();
		dispatch(load_albums(albums.albums));
		return res;
	}
};

export const createAlbum =
	(category, categoryTitle, albumIconId, groupId) => async (dispatch) => {
		const res = await fetch('/api/albums', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				category_id: category,
				category_title: categoryTitle,
				album_icon_id: albumIconId,
				group_id: groupId,
			}),
		});
		const album = await res.json();
		if (res.ok) {
			dispatch(create_album(album));
			return album;
		}
	};

export const deleteAlbum = (id) => async (dispatch) => {
	const deleted = await fetch(`/api/albums/${id}`, {
		method: 'DELETE',
	});
	if (deleted) {
		dispatch(delete_album(id));
		return deleted;
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
