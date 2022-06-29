import { Route, Routes } from 'react-router-dom';
import UseStateHook, {
	CustomCounter,
	CustomForm,
	MultipleCounter,
	SimpleCounter,
	SimpleForm,
} from '../components/01-UseState';
import UseEffectHook, { EffecControl } from '../components/02-UseEffect';
import UseRefHook, { FocusScreen } from '../components/03-useRef';
import HooksReference from '../components/HooksReference';

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
				</Routes>
			</div>
		</>
	);
}
