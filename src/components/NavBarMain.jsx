import { UseCustomLink } from '../hooks';

export default function NavBarMain() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<UseCustomLink className="navbar-brand" to="/">
					Navbar
				</UseCustomLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<UseCustomLink className="nav-link" to="/use-state">
								Use State
							</UseCustomLink>
						</li>
						<li className="nav-item">
							<UseCustomLink className="nav-link" to="use-effect">
								Use effect
							</UseCustomLink>
						</li>
						<li className="nav-item">
							<UseCustomLink className="nav-link" to="use-ref">
								Use Ref
							</UseCustomLink>
						</li>
						<li className="nav-item">
							<UseCustomLink className="nav-link" to="use-layout-effect">
								Use Layouteffect
							</UseCustomLink>
						</li>
						<li className="nav-item">
							<UseCustomLink className="nav-link" to="use-memo">
								Use Memo
							</UseCustomLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
