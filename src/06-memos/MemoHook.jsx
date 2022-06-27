import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

export default function MemoHook() {
	const { counter, increment } = useCounter(1000);
	const [show, setShow] = useState(true);

	const meorizeValue = useMemo(() => heavyStutf(counter), [counter]);

	return (
		<>
			<h3>
				Counter: <small>{counter}</small>
			</h3>
			<h4>{meorizeValue}</h4>
			<button className="btn btn-outline-info" onClick={() => increment()}>
				+1
			</button>
			<button
				className="btn btn-outline-success"
				onClick={() => setShow(!show)}
			>
				Show/hide {JSON.stringify(show)}
			</button>
		</>
	);
}

function heavyStutf(iterationNumber = 100) {
	for (let i = 0; i < iterationNumber; i++) {
		// console.log('Una vualta más...');
	}

	return `${iterationNumber} iteraciones realizadas`;
}
