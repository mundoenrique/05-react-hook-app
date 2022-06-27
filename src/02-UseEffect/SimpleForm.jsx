import { useEffect, useState } from 'react';
import Message from './Message';

export default function SimpleForm() {
	const [formState, setFormState] = useState({
		username: 'Enrique',
		email: 'mmx@mmx.com',
	});

	const { username, email } = formState;

	const onInputchange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		// console.log('useeffect called');
	}, []);

	useEffect(() => {
		// console.log('FormState changed');
	}, [formState]);

	useEffect(() => {
		// console.log('Email changed');
	}, [email]);

	return (
		<>
			<h3>Simple form</h3>
			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputchange}
			/>
			{username === 'Enrique2' && <Message />}
			<input
				type="mail"
				className="form-control mt-2"
				placeholder="email"
				name="email"
				value={email}
				onChange={onInputchange}
			/>
		</>
	);
}
