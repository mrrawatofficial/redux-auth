import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../redux/Auth/userSlice";
import { cartItems } from "../redux/Cart/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const localUser = useSelector(selectUser);
	const cartLoItems = useSelector(cartItems);
	const dispatch = useDispatch();
	const Logout = () => {
		dispatch(logout());
	};
	return (
		<nav
			className="navbar navbar-expand-lg sticky-top navbar-light shadow-sm"
			aria-label="Main navigation"
		>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Logo
				</Link>
				<button
					className="navbar-toggler p-0 border-0"
					type="button"
					id="navbarSideCollapse"
					data-bs-toggle="offcanvas"
					data-bs-target="#navbarsExampleDefault"
					aria-controls="navbarsExampleDefault"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="offcanvas offcanvas-end" id="navbarsExampleDefault">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasExampleLabel">
							Offcanvas
						</h5>
						<button
							type="button"
							className="btn-close text-reset"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						{isLoggedIn && <p className="mx-auto">Welcome, {localUser.name}</p>}
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							{isLoggedIn ? (
								<>
									<li className="nav-item">
										<button
											type="button"
											className="btn btn-primary mt-2 me-3 btn-sm position-relative"
										>
											<AiOutlineShoppingCart />
											<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
												{cartLoItems.length}
											</span>
										</button>
									</li>
									<li className="nav-item">
										<button
											className="nav-link btn btn-danger text-white"
											onClick={Logout}
										>
											Logout
										</button>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<Link
											className="nav-link btn btn-dark text-white"
											to="/login"
										>
											Login
										</Link>
									</li>
									{/* <li className="nav-item">
										<Link
											className="nav-link btn btn-info text-white ms-1"
											to="/register"
										>
											Register
										</Link>
									</li> */}
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
