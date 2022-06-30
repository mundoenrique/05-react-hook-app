import { useEffect, useState } from 'react';

export function EventListener() {
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
			<h3>Mouse location coordinates</h3>
			{JSON.stringify(coords)}
		</>
	);
}
