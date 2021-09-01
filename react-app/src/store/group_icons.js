import { LOAD_GROUPS } from './groups';
const LOAD_ICONS = 'icons/LOAD_ICONS';

const loadIcons = (icons) => ({
	type: LOAD_ICONS,
	icons,
});

export const getIcons = () => async (dispatch) => {
	const res = await fetch('/api/group_icons');

	if (res.ok) {
		const icons = await res.json();
		dispatch(loadIcons(icons.icons));
		return res;
	}
};

const getIconsReducer = (state = {}, action) => {
	switch (action.type) {
		case LOAD_ICONS: {
			const allIcons = { ...state, ...action.icons };
			return allIcons;
		}
		case LOAD_GROUPS: {
			const { icons } = action.groups;
			return { ...state, ...icons };
		}
		default:
			return state;
	}
};

export default getIconsReducer;
