const LOAD_GROUPS = 'groups/LOAD_GROUPS';

const load_groups = (groups) => ({
	type: LOAD_GROUPS,
	groups,
});

export const getGroups = (userId) => async (dispatch) => {
	debugger;
	const res = await fetch(`/api/groups/${userId}`);
	console.log('------------------------------------');
	console.log(res, '********');
	console.log('------------------------------------');

	if (res.ok) {
		const groups = await res.json();
		dispatch(load_groups(groups.groups));
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
		default:
			return state;
	}
};

export default groupReducer;
