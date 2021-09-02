const LOAD_MEDIA = 'media/LOAD_MEDIA';
const CREATE_MEDIA = 'media/CREATE_MEDIA';

const load_media = (media) => ({
	type: LOAD_MEDIA,
	media,
});

const create_media = (media) => ({
	type: CREATE_MEDIA,
	media,
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
		const res = await fetch(`/api/media/${userId}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				item_name: itemName,
				item_url: itemUrl,
				album_id: Number(albumId),
				// user_id: userId,
			}),
		});
		if (res.ok) {
			const media = await res.json();
			dispatch(create_media(media));
			return media;
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
		default:
			return state;
	}
};

export default mediaReducer;
