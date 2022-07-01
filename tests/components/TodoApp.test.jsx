import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/components/08-useReducer';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {
	const todos = [
		{
			id: new Date().getTime(),
			description: 'demo TODO 1',
			done: false,
		},
		{
			id: new Date().getTime() * 2,
			description: 'demo TODO 2',
			done: true,
		},
	];
	useTodo.mockReturnValue({
		todos,
		todosCount: 2,
		pendingTodosCount: 1,
		onNewTodo: jest.fn(),
		onRemoveTodo: jest.fn(),
		onToggleTodo: jest.fn(),
	});

	test('Debe mostrar el componente correctamente', () => {
		render(<TodoApp />);

		expect(screen.getByText(todos[0].description)).toBeTruthy();
		expect(screen.getByText(todos[1].description)).toBeTruthy();
		expect(screen.getByRole('textbox')).toBeTruthy();
	});
});
