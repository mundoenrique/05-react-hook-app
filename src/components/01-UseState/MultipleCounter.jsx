import { useState } from 'react';

export function MultipleCounter() {
	const [counters, setCounters] = useState({
		counter2: 20,
		counter3: 30,
		counter4: 40,
	});
	const { counter2, counter3, counter4 } = counters;

	return (
		<>
			<h2>Counter2: {counter2}</h2>
			<h2>Counter3: {counter3}</h2>
			<h2>Counter4: {counter4}</h2>

			<div
				className="btn-group"
				role="group"
				aria-label="Basic mixed styles example"
			>
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={() => setCounters({ ...counters, counter2: counter2 + 20 })}
				>
					counter2 +20
				</button>
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={() => setCounters({ ...counters, counter3: counter3 + 30 })}
				>
					counter3 +30
				</button>
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={() => setCounters({ ...counters, counter4: counter4 + 40 })}
				>
					counter4 +40
				</button>
			</div>
		</>
	);
}
