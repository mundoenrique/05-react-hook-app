import { NavLink, Outlet } from 'react-router-dom';

export default function UseStateHook() {
	return (
		<>
			<h1>UseState</h1>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<NavLink className="nav-link" to="simple-counter">
						Simple counter
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="multiple-counter">
						Multiple counter
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="custom-counter">
						Custom counter
					</NavLink>
				</li>
			</ul>
			<div className="row">
				<div className="col">
					<Outlet />
				</div>
			</div>
		</>
	);
}
