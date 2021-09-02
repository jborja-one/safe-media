import { LOAD_GROUPS } from './groups';
export const LOAD_ALBUMS = 'albums/LOAD_ALBUMS';
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
		dispatch(load_albums(albums));
		return res;
	}
};

export const createAlbum =
	(category, categoryTitle, albumIconId, groupId) => async (dispatch) => {
		const res = await fetch(`/api/albums/${groupId}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				album_category: category,
				album_title: categoryTitle,
				album_icon_id: Number(albumIconId),
			}),
		});
		// debugger;
		if (res.ok) {
			const album = await res.json();
			dispatch(create_album(album));

			return album;
		} else {
			const errors = await res.json();
		}
	};

export const deleteAlbum = (albumId) => async (dispatch) => {
	const deleted = await fetch(`/api/albums/${albumId}`, {
		method: 'DELETE',
	});
	if (deleted) {
		dispatch(delete_album(albumId));
		return deleted;
	}
};

const albumReducer = (state = {}, action) => {
	if (!action) return state;
	switch (action.type) {
		case LOAD_ALBUMS: {
			const { albums } = action.albums;
			return { ...state, ...albums };
		}
		case LOAD_GROUPS: {
			const { groups } = action.groups;
			return { ...state, ...groups };
		}
		case CREATE_ALBUMS: {
			return { ...state, albums: action.albums };
		}
		case DELETE_ALBUMS: {
			const new_state = { ...state };
			delete new_state[action.albumId];
			// debugger;
			return new_state;
		}
		default:
			return state;
	}
};

export default albumReducer;
