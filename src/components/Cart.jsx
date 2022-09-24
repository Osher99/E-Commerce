import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteItemFromCart, deleteallQuantityItemFromCart, addItemToCart } from '../redux/actions';

const Cart = () => {
    const cartArray = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(deleteallQuantityItemFromCart(item))
    }

    const handleAddToQuantity = (item) => {
        dispatch(addItemToCart(item))
    }
    
    const handleRemoveFromQuantity = (item) => {
        dispatch(deleteItemFromCart(item))
    }
    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            </div>
        );
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartArray?.forEach((x) => totalPrice += x.price * x.qty);
        return totalPrice;
    }
    
    const checkOutSection = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                <p className="lead fw-bold" style={{ textAlign: "center" }}>
                   Total: $ {getTotalPrice()}
                </p>
                    <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25">
                        Proceed to Checkout
                    </NavLink>
                </div>
            </div>
        );
    }
    return (
        <>
            {cartArray?.length === 0 && emptyCart()}
            {cartArray?.length !== 0 && 
            cartArray?.map((cartItem) => {
                return (
                    <div key={cartItem.id} className="px-4 my-5 rounded-3 py-5">
                        <div className="container bg-light py-4" style={{ width: "50%" }}>
                        <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close" />
                                <div className="row justify-content-center">
                                <div className="col-md-4">
                                        <img src={cartItem.images} alt={cartItem.title} width="180px" />
                                    </div>
                                    <div className="col-md-4">
                                        <h3>
                                            {cartItem.title}
                                        </h3>
                                        <p className="lead fw-bold">
                                            $ {cartItem.price} * {cartItem?.qty}
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                    <button className="btn btn-outline-dark ms-2" onClick={() => handleAddToQuantity(cartItem)} aria-label="Plus" style={{ width: "37px", height: "37px" }}>
                                        <i className="fa fa-plus me-1"></i>
                                    </button>
                                    <button className="btn btn-outline-dark ms-2" onClick={() => handleRemoveFromQuantity(cartItem)} aria-label="Minus"  style={{ width: "37px", height: "37px" }}>
                                        <i className="fa fa-minus me-1" style={{ width: "10px", height: "37px" }}></i>
                                    </button>
                                    <div className="row">
                                    <span className="lead fw-bold" style={{ marginTop: "35px" }}>
                                            Quantity: {cartItem?.qty}
                                    </span>
                                    </div>
                                    </div>

                                </div>
                        </div>
                    </div>
                )}
            )}
            {cartArray?.length !== 0 && checkOutSection()}
        </>
    );
};

export default Cart;