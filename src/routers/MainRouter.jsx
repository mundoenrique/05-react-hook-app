import { Route, Routes } from 'react-router-dom';
import UseStateHook, {
	CounterWithCustomHook,
	FormWithCustomHook,
	MultipleCounter,
	SimpleCounter,
} from '../components/01-UseState';
import HooksReference from '../components/HooksReference';

export function MainRouter() {
	return (
		<>
			<div className="container">
				<Routes>
					<Route path="/" element={<HooksReference />} />
					<Route path="use-state" element={<UseStateHook />}>
						<Route path="simple-counter" element={<SimpleCounter />} />
						<Route path="multiple-counter" element={<MultipleCounter />} />
						<Route path="custom-counter" element={<CounterWithCustomHook />} />
						<Route path="custom-form" element={<FormWithCustomHook />} />
					</Route>
				</Routes>
			</div>
		</>
	);
}
