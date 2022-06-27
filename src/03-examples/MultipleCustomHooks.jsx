import { useCounter, useFetch } from '../hooks';

export default function MultipleCustomHooks() {
	const { counter: id, increment } = useCounter(1);

	const { data, isLoading, hasError } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${id}`
	);

	const { author, quote } = !!data && data[0];

	return (
		<>
			<h3>MultipleCustomHooks</h3>
			{isLoading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				<blockquote className="blockquote text-end">
					<p className="mb-1">{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}
			<button
				className="btn btn-outline-primary"
				onClick={() => increment()}
				disabled={isLoading}
			>
				Next Quote
			</button>
		</>
	);
}
