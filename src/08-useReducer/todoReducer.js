export function todoReducer(initialState = [], action) {
	switch (action.type) {
		case '[TODO] Add todo':
			return [action.payload, ...initialState];

		default:
			return initialState;
	}
}
