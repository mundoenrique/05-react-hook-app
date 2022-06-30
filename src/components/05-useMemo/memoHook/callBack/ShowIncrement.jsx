import { memo } from 'react';

export const ShowIncrement = memo(function ({ increment }) {
	return (
		<button className="btn btn-outline-warning" onClick={() => increment(5)}>
			Incrementar
		</button>
	);
});
