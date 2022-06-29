import { useLayoutEffect, useRef, useState } from 'react';

export function Quote({ author, quote }) {
	const pRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();
		setBoxSize({ width, height });
	}, [quote]);

	return (
		<>
			<blockquote className="blockquote text-end">
				<span ref={pRef} className="mb-1">
					{quote}
				</span>
				<footer className="blockquote-footer mt-1">{author}</footer>
			</blockquote>
			<pre>{JSON.stringify(boxSize, null, 2)}</pre>
		</>
	);
}
