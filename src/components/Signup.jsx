import React from 'react';

const Signup = () => {
    return (
        <>
        <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
            <i className="fa fa-user-plus me-1"></i>
        Register
        </button>

        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true" style={{ zindex: 9999 }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signupModalLabel"><span className="fa fa-sign-in"></span>  Register</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <button className="btn btn-primary w-100 mb-4">
                           <span className="fa fa-google me-2"></span> Sign up with Google
                        </button>
                        <button className="btn btn-primary w-100 mb-2">
                           <span className="fa fa-facebook me-2"></span> Sign up with Facebook
                        </button>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="signupInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="signupInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="signupInputUserName1">User Name</label>
                                <input type="text" maxLength={10} className="form-control" id="signupInputUserName1" placeholder="Enter User Name" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="signupInputPassword1">Password</label>
                                <input type="password" className="form-control" id="signupInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="signupInputPassword2">Verify Password</label>
                                <input type="password" className="form-control" id="signupInputPassword2" placeholder="Verify Password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="signupCheck1"  />
                                    <label className="form-check-label" htmlFor="signupCheck1">I Agree to Rodeo rules</label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary w-100 mt-5">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Signup;