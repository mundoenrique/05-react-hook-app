import { useTodo } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export default function TodoApp() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		onNewTodo,
		onRemoveTodo,
		onToggleTodo,
	} = useTodo();

	return (
		<>
			<div className="row">
				<div className="col-7">
					<h3>
						TodoApp: {todosCount}, <span>Pendientes: {pendingTodosCount}</span>
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
