import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export default function MultipleCustomHooks() {
	const { counter: id, increment } = useCounter(1);

	const { data, isLoading, hasError } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${id}`
	);

	const { author, quote } = !!data && data[0];

	return (
		<>
			<h3>MultipleCustomHooks</h3>
			{isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
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
