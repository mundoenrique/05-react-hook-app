import { Outlet } from 'react-router-dom';
import { UseCustomLink } from '../../hooks';

export default function MemorizeHook() {
	return (
		<>
			<ul className="nav nav-tabs mt-5">
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="">
						Memo hook
					</UseCustomLink>
				</li>
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="memo">
						Memorize
					</UseCustomLink>
				</li>
				<li className="nav-item">
					<UseCustomLink className="nav-link" to="call-back">
						Call back
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
