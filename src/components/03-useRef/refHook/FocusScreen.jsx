import { useRef } from 'react';

export function FocusScreen() {
	const inputRef = useRef();

	const onClick = () => {
		inputRef.current.select();
	};

	return (
		<>
			<h2>FocusScreen</h2>
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
