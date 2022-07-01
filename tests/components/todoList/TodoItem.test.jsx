import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../../src/components/08-useReducer';

describe('Pruebas en <TodoItem />', () => {
	const todo = {
		id: new Date().getTime(),
		description: 'demo TODO 1',
		done: false,
	};

	const onRemoveTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks);

	test('Debe mostrar el TODO pendiente de completar', () => {
		render(
			<TodoItem
				{...todo}
				onRemoveTodo={onRemoveTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const liElement = screen.getByRole('listitem');
		const spanElement = screen.getByLabelText('span');

		expect(liElement.className).toBe(
			'list-group-item d-flex justify-content-between'
		);

		expect(spanElement.className.trim()).toBe('align-self-center');
		expect(spanElement.className.trim()).not.toContain(
			'text-decoration-line-through'
		);
	});

	test('Debe mostrar el TODO completado', () => {
		todo.done = true;
		render(
			<TodoItem
				{...todo}
				onRemoveTodo={onRemoveTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className.trim()).toContain(
			'text-decoration-line-through'
		);
	});

	test('Debe llamar onToggleTodo', () => {
		todo.done = true;
		render(
			<TodoItem
				{...todo}
				onRemoveTodo={onRemoveTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText('span');
		fireEvent.click(spanElement);

		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test('Debe llamar onRemoveTodo', () => {
		todo.done = true;
		render(
			<TodoItem
				{...todo}
				onRemoveTodo={onRemoveTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const buttonelement = screen.getByRole('button');
		fireEvent.click(buttonelement);

		expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
