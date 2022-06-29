import { useEffect } from 'react';
import { useCounter, useForm } from '../../hooks';
import { EventListener } from './';

export function EffecControl() {
	const { formState, username, email, onInputchange } = useForm({
		username: 'Enrique',
		email: 'mmx@mmx.com',
	});
	const { counter: effect1, increment: increment1 } = useCounter(0);
	const { counter: effect2, increment: increment2 } = useCounter(0);
	const { counter: effect3, increment: increment3 } = useCounter(0);

	useEffect(() => {
		increment1();
	}, []);

	useEffect(() => {
		increment2();
	}, [formState]);

	useEffect(() => {
		increment3();
	}, [email]);

	return (
		<>
			<h2>Effect Control</h2>
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
					placeholder="email"
					autoComplete="off"
					name="email"
					value={email}
					onChange={onInputchange}
				/>
			</form>
			<p>useEffect without dependencies {effect1}</p>
			<p>useEffect with formState dependency {effect2}</p>
			<p>useEffect with email dependency {effect3}</p>
			{username === 'Enrique2' ? (
				<>
					<h2>Even listener mounted</h2>
					<EventListener />
				</>
			) : (
				<h2>Even listener unmounted</h2>
			)}
		</>
	);
}
