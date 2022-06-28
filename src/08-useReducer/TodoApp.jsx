import { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

export default function TodoApp() {
	const [todos, dispatch] = useReducer(todoReducer, [], initTodos);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const onNewTodo = (todo) => {
		console.log(todo);
		const action = {
			type: '[TODO] Add todo',
			payload: todo,
		};

		dispatch(action);
	};

	const onRemoveTodo = (id) => {
		dispatch({
			type: '[TODO] Remove todo',
			payload: id,
		});
	};

	const onToggleTodo = (id) => {
		console.log(id);
		dispatch({
			type: '[TODO] Toggle todo',
			payload: id,
		});
	};

	return (
		<>
			<div className="row">
				<div className="col-7">
					<h3>
						TodoApp: 10, <span>Pendientes: 2</span>
					</h3>
					<TodoList
						todos={todos}
						onRemoveTodo={onRemoveTodo}
						onToggleTodo={onToggleTodo}
					/>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<TodoAdd onNewTodo={onNewTodo} />
				</div>
			</div>
		</>
	);
}

function initTodos() {
	return JSON.parse(localStorage.getItem('todos')) || [];
}
