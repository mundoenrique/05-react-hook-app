import { NavLink, Outlet } from 'react-router-dom';

export default function UseEffectHook() {
	return (
		<>
			<ul className="nav nav-tabs mt-5">
				<li className="nav-item">
					<NavLink className="nav-link" to="">
						Effect control
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
