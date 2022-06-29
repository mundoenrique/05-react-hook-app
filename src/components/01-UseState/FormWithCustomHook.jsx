import { useForm } from '../../hooks/useForm';

export function FormWithCustomHook() {
	const { username, email, password, onInputchange, onResetForm } = useForm({
		username: '',
		email: '',
		password: '',
	});

	return (
		<>
			<h2>Custom form</h2>
			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputchange}
			/>
			<input
				type="mail"
				className="form-control mt-2"
				placeholder="email"
				name="email"
				value={email}
				onChange={onInputchange}
			/>
			<input
				type="password"
				className="form-control mt-2"
				placeholder="Contraseña"
				name="password"
				value={password}
				onChange={onInputchange}
			/>

			<button className="btn btn-outline-danger mt-2" onClick={onResetForm}>
				Reset
			</button>
		</>
	);
}
