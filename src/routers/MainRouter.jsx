import { Route, Routes } from 'react-router-dom';
import HooksReference from '../components/HooksReference';
import UseStateHook, {
	CustomCounter,
	CustomForm,
	MultipleCounter,
	SimpleCounter,
	SimpleForm,
} from '../components/01-UseState';
import UseEffectHook, { EffecControl } from '../components/02-UseEffect';
import UseRefHook, { FocusScreen } from '../components/03-useRef';
import UseLayoutEffectHook, {
	BreakingBad,
} from '../components/04-useLayoutEffct';
import MemoHook, {
	CallbackHook,
	HeavyProcess,
	Memmorize,
	Father,
} from '../components/05-useMemo';
import ReducerHook, { TodoApp } from '../components/08-useReducer';

export function MainRouter() {
	return (
		<>
			<div className="container">
				<Routes>
					<Route path="/" element={<HooksReference />} />
					<Route path="use-state" element={<UseStateHook />}>
						<Route index element={<SimpleCounter />} />
						<Route path="multiple-counter" element={<MultipleCounter />} />
						<Route path="custom-counter" element={<CustomCounter />} />
						<Route path="simple-form" element={<SimpleForm />} />
						<Route path="custom-form" element={<CustomForm />} />
					</Route>
					<Route path="use-effect" element={<UseEffectHook />}>
						<Route index element={<EffecControl />} />
					</Route>
					<Route path="use-ref" element={<UseRefHook />}>
						<Route index element={<FocusScreen />} />
					</Route>
					<Route path="use-layout-effect" element={<UseLayoutEffectHook />}>
						<Route index element={<BreakingBad />} />
					</Route>
					<Route path="use-memo" element={<MemoHook />}>
						<Route index element={<HeavyProcess />} />
						<Route path="memo" element={<Memmorize />} />
						<Route path="call-back" element={<CallbackHook />} />
						<Route path="memo-homework" element={<Father />} />
					</Route>
					<Route path="use-reducer" element={<ReducerHook />}>
						<Route index element={<TodoApp />} />
					</Route>
				</Routes>
			</div>
		</>
	);
}
