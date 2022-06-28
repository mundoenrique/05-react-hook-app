import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialstate = [
	{
		id: new Date().getTime(),
		descrption: 'Encontrar la gema del alma',
		done: false,
	},
	{
		id: new Date().getTime() * 3,
		descrption: 'Encontrar la gema del tiempo',
		done: false,
	},
];

export default function TodoApp() {
	const [todos, dispatch] = useReducer(todoReducer, initialstate);

	return (
		<>
			<h3>
				TodoApp: 10, <span>Pendientes: 2</span>
			</h3>
			<div className="row">
				<div className="col-7">
					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between">
							<span className="align-self-center">Item 1</span>
							<button className="btn btn-danger">Borrar</button>
						</li>
					</ul>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<form>
						<input
							type="text"
							placeholder="¿Qué hay que hacer?"
							className="form-control"
						/>
						<button type="submit" className="btn btn-outline-info mt-2">
							Agregar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
