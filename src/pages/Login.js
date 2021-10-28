import { useDispatch } from "react-redux";
import { login } from "../redux/Auth/userSlice";
import { GoogleLogin } from "react-google-login";
import { FaGooglePlusG } from "react-icons/fa";

const Login = () => {
	const dispatch = useDispatch();
	const submitLogin = (response) => {
		dispatch(login(response.profileObj));
	};
	return (
		<main className="form-container text-center">
			<form className="container">
				<div className="row">
					<div className="col-md-8 mx-auto">
						<div className="card">
							{/* <div className="card-header">
								<img
									className="mb-4"
									src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
									alt="logo"
									width={72}
									height={57}
								/>
							</div> */}
							<div className="card-body p-0 shadow">
								<div className="row">
									<div className="col-md-8">
										<div className="d-flex p-5 justify-content-center h-100 flex-column">
											<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
											<GoogleLogin
												clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
												render={(renderProps) => (
													<button
														onClick={renderProps.onClick}
														className="flex-center w-100 btn btn-danger"
													>
														Login With
														<strong>
															<FaGooglePlusG className="h3 p-0 m-0 ms-2" />
														</strong>
													</button>
												)}
												// buttonText="Login"
												onSuccess={submitLogin}
												onFailure={() => console.log("error login google")}
												cookiePolicy={"single_host_origin"}
											/>
										</div>
									</div>
									<div className="col-md-4">
										<img
											src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
											alt="login"
											className="img img-fluid"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</main>
	);
};

export default Login;
