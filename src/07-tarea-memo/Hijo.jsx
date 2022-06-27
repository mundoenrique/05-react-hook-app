import { memo } from 'react';

export default memo(function Hijo({ numero, incrementar }) {
	// console.log('  Me volví a generar :(  ');

	return (
		<button
			className="btn btn-primary mr-3"
			onClick={() => incrementar(numero)}
		>
			{numero}
		</button>
	);
});
