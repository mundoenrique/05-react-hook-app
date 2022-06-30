import { memo } from 'react';

export const Children = memo(function ({ number, increment }) {
	return (
		<button className="btn btn-primary mr-3" onClick={() => increment(number)}>
			{number}
		</button>
	);
});
