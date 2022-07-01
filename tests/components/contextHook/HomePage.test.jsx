import { render, screen } from '@testing-library/react';
import { HomePage } from '../../../src/components/09-useContext/contextHook/HomePage';
import { UserContext } from '../../../src/context/UserContext';

describe('Pruebas en <HomePage />', () => {
	test('Debe mostrar el componente sin el usuario', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);

		expect(screen.getByLabelText('pre').innerHTML).toBe('null');
	});

	test('Debe mostrar el componente sin el usuario', () => {
		const user = {
			id: 1,
			name: 'enrique',
		};

		render(
			<UserContext.Provider value={{ user }}>
				<HomePage />
			</UserContext.Provider>
		);

		expect(screen.getByLabelText('pre').innerHTML).toContain(
			user.id.toString()
		);
		expect(screen.getByLabelText('pre').innerHTML).toContain(`${user.id}`);
		expect(screen.getByLabelText('pre').innerHTML).toContain(user.name);
	});
});
