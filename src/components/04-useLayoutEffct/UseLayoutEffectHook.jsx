import { Outlet } from 'react-router-dom';
import { UseCustomLink } from '../../hooks';

export default function UseLayoutEffectHook() {
	return (
		<>
			<ul className="nav nav-tabs mt-5">
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="">
						LayoutEffect
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
