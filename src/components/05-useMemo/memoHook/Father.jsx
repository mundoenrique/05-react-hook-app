import { useCallback, useState } from 'react';
import { Children } from '../';

export function Father() {
	const numbers = [2, 4, 6, 8, 10];
	const [value, setValue] = useState(0);

	const increment = useCallback((num) => {
		setValue((val) => val + num);
	}, []);

	return (
		<>
			<h2>Father</h2>
			<p>Total: {value}</p>
			<div className="btn-group">
				{numbers.map((n) => (
					<Children key={n} number={n} increment={increment} />
				))}
			</div>
		</>
	);
}
