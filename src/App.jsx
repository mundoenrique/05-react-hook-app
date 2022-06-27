import FormWithCustomHook from './02-UseEffect/FormWithCustomHook';
import SimpleForm from './02-UseEffect/SimpleForm';
import CounterApp from './01-UseState/CounterApp';
import CounterWithCustomHook from './01-UseState/CounterWithCustomHook';

export default function App() {
	return (
		<>
			<h1>Hooks React</h1>
			<br />
			<h2>UseState</h2>
			<hr />
			<CounterApp />
			<br />
			<br />
			<CounterWithCustomHook />
			<br />
			<br />
			<br />
			<h2>UseEffect</h2>
			<hr />
			<SimpleForm />
			<br />
			<br />
			<FormWithCustomHook />
		</>
	);
}
