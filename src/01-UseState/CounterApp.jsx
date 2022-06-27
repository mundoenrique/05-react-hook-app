import { useState } from 'react';

export default function CounterApp() {
	const [counter1, setCounter] = useState(10);
	const [counters, setCounters] = useState({
		counter2: 20,
		counter3: 30,
		counter4: 40,
	});
	const { counter2, counter3, counter4 } = counters;

	return (
		<>
			<h3>Counter1: {counter1}</h3>
			<button
				className="btn btn-primary"
				onClick={() => setCounter(counter1 + 10)}
			>
				counter1 +10
			</button>
			<br />
			<br />
			<h3>Counter2: {counter2}</h3>
			<h3>Counter3: {counter3}</h3>
			<h3>Counter4: {counter4}</h3>
			<button
				className="btn btn-primary"
				onClick={() => setCounters({ ...counters, counter2: counter2 + 20 })}
			>
				counter2 +20
			</button>
		</>
	);
}
