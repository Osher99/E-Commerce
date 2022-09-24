import React from 'react';

const Login = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                <i className="fa fa-sign-in me-1"></i>
            Login
            </button>

            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" style={{ zindex: 9999 }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel"><span className="fa fa-sign-in"></span>  Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-google me-2"></span> Sign in with Google
                            </button>
                            <button className="btn btn-primary w-100 mb-2">
                               <span className="fa fa-facebook me-2"></span> Sign in with Facebook
                            </button>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="loginInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="loginInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="loginInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="loginCheck1"  />
                                        <label className="form-check-label" htmlFor="loginCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;