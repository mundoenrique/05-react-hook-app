import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks';

export function MemoHook() {
	const { counter, increment } = useCounter(1000);
	const [show, setShow] = useState(true);

	const meorizeValue = useMemo(() => heavyStutf(counter), [counter]);

	return (
		<>
			<h2>
				Counter: <small>{counter}</small>
			</h2>
			<h3>{meorizeValue}</h3>
			<div
				className="btn-group"
				role="group"
				aria-label="Basic mixed styles example"
			>
				<button className="btn btn-outline-info" onClick={() => increment()}>
					+1
				</button>
				<button
					className="btn btn-outline-success"
					onClick={() => setShow(!show)}
				>
					Show/hide {JSON.stringify(show)}
				</button>
			</div>
		</>
	);
}

function heavyStutf(iterationNumber = 100) {
	for (let i = 0; i < iterationNumber; i++) {
		// console.log(`iteración`);
	}

	return `${iterationNumber} iteraciones realizadas`;
}
