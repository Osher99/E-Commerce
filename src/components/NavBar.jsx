import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Login';
import Signup from './Signup';

const NavBar = () => {
    const cartArray = useSelector((state) => state.cart.cart);
    return (
        <div className="sticky-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-primary fw-bold fs-4" to="/">
                        L.A Rodeo Drive Collection
                        </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                             <Login />
                             <Signup />
                             <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> Cart ({cartArray?.length})
                             </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;