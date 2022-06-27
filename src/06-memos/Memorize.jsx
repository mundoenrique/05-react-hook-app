import { useState } from 'react';
import { useCounter } from '../hooks';
import Small from './Small';

export default function Memmorize() {
	const { counter, increment } = useCounter(1);
	const [show, setShow] = useState(true);

	return (
		<>
			<h3>
				Counter: <Small value={counter} />
			</h3>
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
