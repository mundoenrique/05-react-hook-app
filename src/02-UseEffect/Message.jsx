import { useEffect, useState } from 'react';

export default function Message() {
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			setCoords({ x, y });
		};

		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<>
			<h4>Usuario existe</h4>
			{JSON.stringify(coords)}
		</>
	);
}
