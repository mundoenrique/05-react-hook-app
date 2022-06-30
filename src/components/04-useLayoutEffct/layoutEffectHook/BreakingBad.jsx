import { useCounter, useFetch } from '../../../hooks';
import { LoadingQuote, Quote } from '../';

export function BreakingBad() {
	const { counter: id, increment } = useCounter(1);

	const { data, isLoading, hasError } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${id}`
	);

	const { author, quote } = !!data && data[0];

	return (
		<>
			<h2>BreakingBad</h2>
			<button
				className="btn btn-outline-primary"
				onClick={() => increment()}
				disabled={isLoading}
			>
				Next Quote
			</button>
			{isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
		</>
	);
}
