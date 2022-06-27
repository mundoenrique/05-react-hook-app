import FormWithCustomHook from './02-UseEffect/FormWithCustomHook';
import SimpleForm from './02-UseEffect/SimpleForm';
import CounterApp from './01-UseState/CounterApp';
import CounterWithCustomHook from './01-UseState/CounterWithCustomHook';
import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
import FocusScreen from './04-useRef/FocusScreen';
import Layout from './05-useLayoutEffct/Layout';

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
			<br />
			<br />
			<br />
			<h2>Custom Hooks</h2>
			<hr />
			<MultipleCustomHooks />
			<br />
			<br />
			<br />
			<h2>UseRef</h2>
			<hr />
			<FocusScreen />
			<br />
			<br />
			<br />
			<h2>UseLayoutEffect</h2>
			<hr />
			<Layout />
		</>
	);
}
