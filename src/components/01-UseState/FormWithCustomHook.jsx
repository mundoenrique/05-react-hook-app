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
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Username"
					autoComplete="off"
					name="username"
					value={username}
					onChange={onInputchange}
				/>
				<input
					type="mail"
					className="form-control mt-2"
					placeholder="Email"
					autoComplete="off"
					name="email"
					value={email}
					onChange={onInputchange}
				/>
				<input
					type="password"
					className="form-control mt-2"
					placeholder="Password"
					autoComplete="off"
					name="password"
					value={password}
					onChange={onInputchange}
				/>

				<button
					type="reset"
					className="btn btn-outline-danger mt-2"
					onClick={onResetForm}
				>
					Reset
				</button>
			</form>
		</>
	);
}
