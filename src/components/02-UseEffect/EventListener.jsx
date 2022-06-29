import { useEffect, useState } from 'react';

export function EventListener() {
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			setCoords({ x, y });
			console.log("addEventListener :'-(");
		};

		window.addEventListener('mousemove', onMouseMove);
		console.log("addEventListener :'-(");

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			console.log('removeEventListener :-)');
		};
	}, []);

	return (
		<>
			<h3>Coordenadas del mouse</h3>
			{JSON.stringify(coords)}
		</>
	);
}
