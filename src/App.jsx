// import FormWithCustomHook from './02-UseEffect/FormWithCustomHook';
// import SimpleForm from './02-UseEffect/SimpleForm';
// import CounterApp from './01-UseState/CounterApp';
// import CounterWithCustomHook from './01-UseState/CounterWithCustomHook';
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
// import FocusScreen from './04-useRef/FocusScreen';
// import Layout from './05-useLayoutEffct/Layout';
// import Memmorize from './06-memos/Memorize';
// import MemoHook from './06-memos/MemoHook';
// import CallbackHook from './06-memos/CallbackHook';
// import Padre from './07-tarea-memo/Padre';
// import TodoApp from './08-useReducer/TodoApp';
// import MainApp from './09-useContext/MainApp';

import NavBarMain from './components/NavBarMain';
import { MainRouter } from './routers/MainRouter';

export default function App() {
	return (
		<>
			<NavBarMain />
			<MainRouter />
		</>
	);
}
