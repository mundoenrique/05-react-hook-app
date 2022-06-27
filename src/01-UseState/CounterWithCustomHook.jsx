import { useCounter } from '../hooks';

export default function CounterWithCustomHook() {
	const { counter, increment, decrement, reset } = useCounter(1);

	return (
		<>
			<h2>Conter with custom hook {counter}</h2>
			<button className="btn btn-outline-primary" onClick={() => increment()}>
				Add
			</button>
			<button className="btn btn-outline-danger" onClick={reset}>
				Reset
			</button>
			<button className="btn btn-outline-info" onClick={() => decrement()}>
				Subtract
			</button>
		</>
	);
}
