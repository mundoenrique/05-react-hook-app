import CounterApp from './01-UseState/CounterApp';
import CounterWithCustomHook from './01-UseState/CounterWithCustomHook';

export default function App() {
	return (
		<>
			<h1>Hooks React</h1>
			<br />
			<CounterApp />
			<br />
			<br />
			<CounterWithCustomHook />
		</>
	);
}
