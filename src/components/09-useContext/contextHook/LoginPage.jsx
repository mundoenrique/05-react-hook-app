import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

export function LoginPage() {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h1>LoginPage</h1>
			<button
				className="btn btn-outline-primary mt-2 mb-2"
				onClick={() =>
					setUser({
						id: 123456,
						name: 'Enrique Peñaloza',
						email: 'enrique@gmail.com',
					})
				}
			>
				Set User
			</button>
			<pre>{JSON.stringify(user, null, 3)}</pre>
		</>
	);
}
