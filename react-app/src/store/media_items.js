const LOAD_MEDIA = 'media/LOAD_MEDIA';
const CREATE_MEDIA = 'media/CREATE_MEDIA';
const DELETE_MEDIA = 'media/DELETE_MEDIA';

const load_media = (media) => ({
	type: LOAD_MEDIA,
	media,
});

const create_media = (media) => ({
	type: CREATE_MEDIA,
	media,
});

const delete_media = (mediaItemId) => ({
	type: DELETE_MEDIA,
	mediaItemId,
});

export const getMedia = (id) => async (dispatch) => {
	const res = await fetch(`/api/media/${id}`);

	if (res.ok) {
		const media = await res.json();
		dispatch(load_media(media));
		return res;
	}
};

export const createMedia =
	(itemName, itemUrl, albumId, userId) => async (dispatch) => {
		console.log(itemName, '***from thunk****');
		const res = await fetch(`/api/media/${userId}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				item_name: itemName,
				item_url: itemUrl,
				album_id: Number(albumId),
			}),
		});
		if (res.ok) {
			const media = await res.json();
			dispatch(create_media(media));
			return media;
		}
	};

export const deleteMedia = (mediaItemId) => async (dispatch) => {
	const deleted = await fetch(`/api/media/${mediaItemId}`, {
		method: 'DELETE',
	});
	if (deleted) {
		dispatch(delete_media(mediaItemId));
		return deleted;
	}
};

const mediaReducer = (state = {}, action) => {
	if (!action) return state;
	switch (action.type) {
		case LOAD_MEDIA: {
			// debugger;
			const { media_items } = action.media;
			return { ...state, ...media_items };
		}
		case CREATE_MEDIA: {
			return { ...state, media_items: action.media_items };
		}
		case DELETE_MEDIA: {
			const new_state = { ...state };
			delete new_state[action.mediaItemId];
			return new_state;
		}
		default:
			return state;
	}
};

export default mediaReducer;
