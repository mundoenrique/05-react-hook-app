import { render, screen, fireEvent } from '@testing-library/react';
import { BreakingBad } from '../../../src/components/04-useLayoutEffct';
import { useFetch } from '../../../src/hooks/useFetch';
import { useCounter } from '../../../src/hooks/useCounter';

jest.mock('../../../src/hooks/useCounter');
jest.mock('../../../src/hooks/useFetch');

describe('Pruebas en <BreakingBad />', () => {
	const mockIncrement = jest.fn();
	const quoteInfo = { author: 'An author', quote: 'A quote' };

	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncrement,
	});

	useFetch.mockReturnValue({
		data: null,
		isLoading: true,
		hasError: null,
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('Debe mostrar el componente por defecto', () => {
		render(<BreakingBad />);
		const nextButton = screen.getByRole('button', { name: 'Next Quote' });

		expect(screen.getByText('BreakingBad'));
		expect(screen.getByText('Loading...'));
		expect(screen.getByText('Loading...'));
		expect(nextButton.disabled).toBeTruthy();
	});

	test('Debe mostrar un quote', () => {
		useFetch.mockReturnValue({
			data: [quoteInfo],
			isLoading: false,
			hasError: null,
		});
		render(<BreakingBad />);
		const nextButton = screen.getByRole('button', { name: 'Next Quote' });

		expect(screen.getByText(quoteInfo.author)).toBeTruthy();
		expect(screen.getByText(quoteInfo.quote)).toBeTruthy();
		expect(nextButton.disabled).toBeFalsy();
	});

	test('Debe llamar a la función de incrementar', () => {
		render(<BreakingBad />);
		const nextButton = screen.getByRole('button', { name: 'Next Quote' });
		fireEvent.click(nextButton);

		expect(mockIncrement).toHaveBeenCalledTimes(1);
	});
});
