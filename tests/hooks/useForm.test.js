import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en Hook useForm', () => {
	const initalForm = {
		name: 'Enrique',
		email: 'enrique@gmail.com',
	};

	test('Debe regresar el objeto por defecto', () => {
		const {
			result: { current },
		} = renderHook(() => useForm(initalForm));

		expect(current).toEqual({
			...initalForm,
			formState: initalForm,
			onInputchange: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	test('Debe Cambiar el atributo indicado en el objeto', () => {
		const nextName = 'Yajaira';
		const { result } = renderHook(() => useForm(initalForm));

		const { onInputchange } = result.current;

		act(() => {
			onInputchange({ target: { name: 'name', value: nextName } });
		});

		const { name, formState } = result.current;

		expect(name).toBe(nextName);
		expect(formState.name).toBe(nextName);
	});

	test('Debe Cambiar resetear el fomrulario', () => {
		const nextName = 'Yajaira';
		const { result } = renderHook(() => useForm(initalForm));

		const { onInputchange, onResetForm } = result.current;

		act(() => {
			onInputchange({ target: { name: 'name', value: nextName } });
			onResetForm();
		});

		const { name, formState } = result.current;

		expect(name).toBe(initalForm.name);
		expect(formState.name).toBe(initalForm.name);
	});
});
