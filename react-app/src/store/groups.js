export const LOAD_GROUPS = 'groups/LOAD_GROUPS';
const DELETE_GROUP = 'groups/DELETE_GROUP';
const CREATE_GROUP = 'groups/CREATE_GROUP';

const load_groups = (groups) => ({
	type: LOAD_GROUPS,
	groups,
});

const create_group = (group) => ({
	type: CREATE_GROUP,
	group,
});

const delete_group = (id) => ({
	type: DELETE_GROUP,
	id,
});

export const getGroups = (id) => async (dispatch) => {
	const res = await fetch(`/api/groups/${id}`);

	if (res.ok) {
		const groups = await res.json();
		// debugger;
		dispatch(load_groups(groups));
		return res;
	}
};

export const createGroup =
	(category, categoryTitle, groupIconId, userId) => async (dispatch) => {
		const res = await fetch('/api/groups/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				group_category: category,
				group_title: categoryTitle,
				group_icon_id: Number(groupIconId),
				user_id: userId,
			}),
		});
		if (res.ok) {
			const group = await res.json();
			dispatch(create_group(group));
			return group;
		} else {
			const errors = await res.json();
			// debugger;
		}
	};

export const deleteGroup = (id) => async (dispatch) => {
	const deleted = await fetch(`/api/groups/${id}`, {
		method: 'DELETE',
	});
	if (deleted) {
		dispatch(delete_group(id));
		return deleted;
	}
};

const groupReducer = (state = {}, action) => {
	if (!action) return state;
	switch (action.type) {
		case LOAD_GROUPS: {
			const { groups } = action.groups;
			return { ...state, ...groups };
		}
		case CREATE_GROUP: {
			const new_state = {
				...state,
				[action.group.id]: action.group,
			};
			return new_state;
		}
		case DELETE_GROUP: {
			const new_state = { ...state };
			delete new_state[action.groupId];
			return new_state;
		}
		default:
			return state;
	}
};

export default groupReducer;
