import { Outlet } from 'react-router-dom';
import { UseCustomLink } from '../../hooks';

export default function RefHook() {
	return (
		<>
			<ul className="nav nav-tabs mt-5">
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="">
						FocusScreen
					</UseCustomLink>
				</li>
			</ul>
			<div className="row mt-2">
				<div className="col">
					<Outlet />
				</div>
			</div>
		</>
	);
}
