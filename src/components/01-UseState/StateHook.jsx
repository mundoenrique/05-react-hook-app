import { Outlet } from 'react-router-dom';
import { UseCustomLink } from '../../hooks';

export default function StateHook() {
	return (
		<>
			<ul className="nav nav-tabs mt-5">
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="">
						Simple counter
					</UseCustomLink>
				</li>
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="multiple-counter">
						Multiple counter
					</UseCustomLink>
				</li>
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="custom-counter">
						Custom counter
					</UseCustomLink>
				</li>
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="simple-form">
						Simple form
					</UseCustomLink>
				</li>
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="custom-form">
						Custom form
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
