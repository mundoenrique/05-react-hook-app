import FormWithCustomHook from './02-UseEffect/FormWithCustomHook';
import SimpleForm from './02-UseEffect/SimpleForm';
import CounterApp from './01-UseState/CounterApp';
import CounterWithCustomHook from './01-UseState/CounterWithCustomHook';
import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
import FocusScreen from './04-useRef/FocusScreen';
import Layout from './05-useLayoutEffct/Layout';
import Memmorize from './06-memos/Memorize';
import MemoHook from './06-memos/MemoHook';
import CallbackHook from './06-memos/CallbackHook';
import Padre from './07-tarea-memo/Padre';
import TodoApp from './08-useReducer/TodoApp';

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
			<br />
			<br />
			<br />
			<h2>Memmorize</h2>
			<hr />
			<Memmorize />
			<br />
			<br />
			<br />
			<h2>Memo Hook</h2>
			<hr />
			<MemoHook />
			<br />
			<br />
			<br />
			<h2>UseCallback</h2>
			<hr />
			<CallbackHook />
			<br />
			<br />
			<br />
			<h2>Tarea Memos</h2>
			<hr />
			<Padre />
			<br />
			<br />
			<br />
			<h2>UseReducer</h2>
			<hr />
			<TodoApp />
		</>
	);
}
