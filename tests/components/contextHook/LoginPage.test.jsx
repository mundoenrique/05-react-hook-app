import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from '../../../src/components/09-useContext/contextHook/LoginPage';
import { UserContext } from '../../../src/context/UserContext';

describe('Pruebas en <LoginPage />', () => {
	test('Debe mostrar el componente sin el usuario', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);

		expect(screen.getByLabelText('pre').innerHTML).toBe('null');
	});

	test('Debe llamar al setUser', () => {
		const user = {
			id: 123456,
			name: 'Enrique Peñaloza',
			email: 'enrique@gmail.com',
		};

		const setUserMock = jest.fn();

		render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const buttonElement = screen.getByRole('button');
		fireEvent.click(buttonElement);

		expect(setUserMock).toHaveBeenCalledWith(user);
	});
});
