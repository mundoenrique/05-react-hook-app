import { useState } from 'react';
import { useCounter } from '../../hooks';
import { Small } from './';

export function Memmorize() {
	const { counter, increment } = useCounter(1);
	const [show, setShow] = useState(true);

	return (
		<>
			<h2>
				Counter: <Small value={counter} />
			</h2>
			<div className="btn-group" role="group">
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
