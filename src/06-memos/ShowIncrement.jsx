import { memo } from 'react';

export default memo(function ShowIncrement({ increment }) {
	// console.log('volví :(');
	return (
		<button className="btn btn-outline-warning" onClick={() => increment(5)}>
			Incrementar
		</button>
	);
});
