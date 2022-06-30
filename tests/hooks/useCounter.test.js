import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en useCounter', () => {
	test('Debe retornar los valores por defecto', () => {
		const {
			result: {
				current: { counter, increment, decrement, reset },
			},
		} = renderHook(() => useCounter());

		expect(counter).toEqual(expect.any(Number));
		expect(increment).toEqual(expect.any(Function));
		expect(decrement).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});

	test('Debe regresar el counter con el valor dado', () => {
		const counterTest = 10;
		const {
			result: {
				current: { counter },
			},
		} = renderHook(() => useCounter(counterTest));

		expect(counter).toBe(counterTest);
	});

	test('Debe incrementar el contador', () => {
		const counterTest = 1;
		const add = 1;
		const { result } = renderHook(() => useCounter());
		const { increment } = result.current;

		act(() => {
			increment(add);
		});

		const { counter } = result.current;

		expect(counter).toBe(counterTest + add);
	});

	test('Debe decrementar el contador', () => {
		const counterTest = 10;
		const subtract = 1;
		const { result } = renderHook(() => useCounter(counterTest));
		const { decrement } = result.current;

		act(() => {
			decrement(subtract);
		});

		const { counter } = result.current;

		expect(counter).toBe(counterTest - subtract);
	});

	test('Debe resetear el contador', () => {
		const counterTest = 1;
		const subtract = 10;
		const { result } = renderHook(() => useCounter());
		const { decrement, reset } = result.current;

		act(() => {
			decrement(subtract);
		});

		const { counter: counterSubtract } = result.current;

		expect(counterSubtract).toBe(counterTest - subtract);

		act(() => {
			reset();
		});

		const { counter: counterReset } = result.current;

		expect(counterReset).toBe(counterTest);
	});
});
