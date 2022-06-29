import { useState } from 'react';

export function SimpleCounter() {
	const [counter1, setCounter] = useState(10);

	return (
		<>
			<h2>Counter1: {counter1}</h2>
			<button
				className="btn btn-primary"
				onClick={() => setCounter(counter1 + 10)}
			>
				counter1 +10
			</button>
		</>
	);
}
