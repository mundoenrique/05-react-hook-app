import { useCounter } from '../../hooks';

export function CounterWithCustomHook() {
	const { counter, increment, decrement, reset } = useCounter(1);

	return (
		<>
			<h2>Custom counter: {counter}</h2>
			<div
				className="btn-group"
				role="group"
				aria-label="Basic mixed styles example"
			>
				<button className="btn btn-outline-primary" onClick={() => increment()}>
					Add
				</button>
				<button className="btn btn-outline-danger" onClick={reset}>
					Reset
				</button>
				<button className="btn btn-outline-info" onClick={() => decrement()}>
					Subtract
				</button>
			</div>
		</>
	);
}
