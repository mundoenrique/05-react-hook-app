import { useState } from 'react';

export function SimpleForm() {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
	});

	const { username, email } = formState;

	const onInputchange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<>
			<h2>Simple form</h2>
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
			</form>
		</>
	);
}
