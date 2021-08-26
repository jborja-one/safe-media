const LOAD_GROUPS = 'groups/LOAD_GROUPS';
const DELETE_GROUP = 'groups/DELETE_GROUP';

const load_groups = (groups) => ({
	type: LOAD_GROUPS,
	groups,
});

const delete_group = (groupId) => ({
	type: DELETE_GROUP,
	groupId,
});

export const getGroups = (id) => async (dispatch) => {
	const res = await fetch(`/api/groups/${id}`);

	if (res.ok) {
		const groups = await res.json();
		dispatch(load_groups(groups.groups));
		return res;
	}
};

export const deleteGroup = (groupId) => async (dispatch) => {
	const res = await fetch(`/api/groups/${groupId}`, {
		method: 'DELETE',
	});
	if (res) {
		dispatch(delete_group(groupId));
		return res;
	}
};

const groupReducer = (state = {}, action) => {
	if (!action) return state;
	switch (action.type) {
		case LOAD_GROUPS: {
			const new_state = {};
			action.groups.forEach((group) => {
				new_state[group.id] = group;
			});
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
