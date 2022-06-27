import { useRef } from 'react';

export default function FocusScreen() {
	const inputRef = useRef();

	const onClick = () => {
		inputRef.current.select();
	};

	return (
		<>
			<h3>FocusScreen</h3>
			<input
				ref={inputRef}
				type="text"
				placeholder="Ingrese su nombre"
				className="form-control"
			/>
			<button className="btn btn-primary mt-2" onClick={onClick}>
				Set focus
			</button>
		</>
	);
}
