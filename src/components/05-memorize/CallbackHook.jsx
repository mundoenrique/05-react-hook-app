import { useCallback, useState } from 'react';
import { ShowIncrement } from './';

export function CallbackHook() {
	const [counter, setCounter] = useState(10);

	const increment = useCallback((value) => {
		setCounter((count) => count + value);
	}, []);

	return (
		<>
			<h3>useCallback {counter} </h3>
			<ShowIncrement increment={increment} />
		</>
	);
}
