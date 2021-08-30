const LOAD_MEDIA = 'media/LOAD_MEDIA';

const load_media = (media) => ({
	type: LOAD_MEDIA,
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

const mediaReducer = (state = {}, action) => {
	if (!action) return state;
	switch (action.type) {
		case LOAD_MEDIA:
			const new_state = {};
			action.media.forEach((item) => {
				new_state[item.id] = item;
			});
			return new_state;
		default:
			return state;
	}
};

export default mediaReducer;
