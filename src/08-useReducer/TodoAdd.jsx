import { useForm } from '../hooks/useForm';

export function TodoAdd({ onNewTodo }) {
	const { category, onInputchange, onResetForm } = useForm({ category: '' });

	const onSubmitTodo = (event) => {
		event.preventDefault();

		if (category.trim().length <= 1) return;

		const todo = {
			id: new Date().getTime(),
			description: category.trim(),
			done: false,
		};

		onNewTodo(todo);

		onResetForm();
	};
	return (
		<form onSubmit={onSubmitTodo}>
			<input
				type="text"
				name="category"
				value={category}
				onChange={onInputchange}
				placeholder="¿Qué hay que hacer?"
				className="form-control"
				autoComplete="off"
			/>
			<button type="submit" className="btn btn-outline-info mt-2">
				Agregar
			</button>
		</form>
	);
}
