import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainRouter } from '../../src/routers/MainRouter';

describe('Pruebas en <MainRouter />', () => {
	test('Debe mostrar <HooksReference />', () => {
		render(
			<MemoryRouter>
				<MainRouter />
			</MemoryRouter>
		);

		expect(screen.getByText('Referencia de la API de los Hooks')).toBeTruthy();
	});

	test('Debe mostrar <UseStateHook />', () => {
		render(
			<MemoryRouter initialEntries={['/use-state']}>
				<MainRouter />
			</MemoryRouter>
		);

		expect(screen.getByText('Simple counter')).toBeTruthy();
	});
});
