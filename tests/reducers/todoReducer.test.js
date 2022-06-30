import { todoReducer } from '../../src/reducers/todoReducer';

describe('Pruebas en todoReducer', () => {
	const initialState = [
		{
			id: new Date().getTime(),
			descripton: 'demo TODO 1',
			done: false,
		},
		{
			id: new Date().getTime() * 3,
			descripton: 'demo TODO 2',
			done: false,
		},
	];

	test('Debe regresar el estasdo inicial', () => {
		const newState = todoReducer(initialState, {});

		expect(newState).toBe(initialState);
	});

	test('Debe agregar un TODO', () => {
		const newTodo = {
			id: new Date().getTime(),
			descripton: 'New Todo',
			done: false,
		};

		const action = {
			type: '[TODO] Add todo',
			payload: newTodo,
		};

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(initialState.length + 1);
		expect(newState[0]).toEqual(newTodo);
		expect(newState).toContain(newTodo);
	});

	test('Debe eliminar un TODO', () => {
		const action = {
			type: '[TODO] Remove todo',
			payload: initialState[0].id,
		};

		const newState = todoReducer(initialState, action);

		expect(newState).not.toContain(initialState[0]);
		expect(newState.length).toBe(initialState.length - 1);
	});

	test('Debe el toggle del TODO', () => {
		const action = {
			type: '[TODO] Toggle todo',
			payload: initialState[0].id,
		};

		const newState = todoReducer(initialState, action);
		expect(newState[0].done).toBe(true);

		const newState2 = todoReducer(newState, action);
		expect(newState2[0].done).toBe(false);
	});
});
