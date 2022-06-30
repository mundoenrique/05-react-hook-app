import { Outlet } from 'react-router-dom';
import { UserProvider } from '../../context/UserProvider';
import { UseCustomLink } from '../../hooks';

export default function ContextHook() {
	return (
		<>
			<ul className="nav nav-tabs mt-5">
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="">
						Home
					</UseCustomLink>
				</li>
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="about">
						About
					</UseCustomLink>
				</li>
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="login">
						Login
					</UseCustomLink>
				</li>
			</ul>
			<div className="row mt-2">
				<div className="col">
					<UserProvider>
						<Outlet />
					</UserProvider>
				</div>
			</div>
		</>
	);
}
