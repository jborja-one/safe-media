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
		dispatch(load_media(media.media));
		return res;
	}
};

export const createMedia =
	(itemName, itemUrl, albumId, userId) => async (dispatch) => {
		const res = await fetch('/api/groups/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				item_name: itemName,
				item_url: itemUrl,
				album_id: albumId,
				user_id: userId,
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
		case LOAD_MEDIA:
			const new_state = {};
			action.media.forEach((item) => {
				new_state[item.id] = item;
			});
			return new_state;
		case CREATE_MEDIA: {
			const new_state = {
				...state,
				[action.media.id]: action.media,
			};
			return new_state;
		}
		default:
			return state;
	}
};

export default mediaReducer;
