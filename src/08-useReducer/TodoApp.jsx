import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialstate = [
	{
		id: new Date().getTime(),
		description: 'Encontrar la gema del alma',
		done: false,
	},
	{
		id: new Date().getTime() * 3,
		description: 'Encontrar la gema del tiempo',
		done: false,
	},
];

export default function TodoApp() {
	const [todos, dispatch] = useReducer(todoReducer, initialstate);

	const onNewTodo = (todo) => {
		console.log(todo);
	};

	return (
		<>
			<div className="row">
				<div className="col-7">
					<h3>
						TodoApp: 10, <span>Pendientes: 2</span>
					</h3>
					<TodoList todos={todos} />
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<TodoAdd onNewTodo={onNewTodo} />
				</div>
			</div>
		</>
	);
}
