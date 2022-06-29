import { useEffect, useState } from 'react';
import { useForm } from '../../hooks';
import { EventListener } from './';

export function EffecControl() {
	const { formState, username, email, onInputchange } = useForm({
		username: 'Enrique',
		email: 'mmx@mmx.com',
	});

	useEffect(() => {
		console.log('useeffect called');
	}, []);

	useEffect(() => {
		console.log('FormState changed');
	}, [formState]);

	useEffect(() => {
		console.log('Email changed');
	}, [email]);

	return (
		<form className="mt-5">
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
			{username === 'Enrique2' && <EventListener />}
		</form>
	);
}
