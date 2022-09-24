import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, getSingleProduct } from '../redux/actions';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'underscore';
import { useSelector } from 'react-redux';

const Product = () => {
    const product = useSelector((state) => state.products.product, _.isEqual);
    const { id } = useParams();

    const dispatch = useDispatch();
    
    const addProduct = (product) => {
        dispatch(addItemToCart(product));
        toast(`${product.title} has been added to the cart successfully!`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
    }

    useEffect(() => {
        const getProduct = async () => {
            dispatch(getSingleProduct(id));
        }
        getProduct();
    }, [dispatch, product, id]);

    const Loading = () => {
        return(
            <>
                <div className="col-md-5">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75}  />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        );
    };
    
    const ShowProduct = () => {
            return(
                <>
                    <div className="col-md-6 ">
                        <img src={product?.images} alt={product?.title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-black-50">
                            {product?.category?.name}
                        </h4>
                        <h1 className="display-5">
                            {product?.title}
                        </h1>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <h3 className=" display-6 fw-bold my-4">
                            $ {product?.price}
                        </h3>
                        <p className="lead">
                            Description {product?.description}
                        </p>
                        <button onClick={() => addProduct(product)} className="btn btn-outline-dark px-4 py-2">
                            Add To Cart
                        </button>
                        <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
                            Go To Cart
                        </NavLink>
                        <ToastContainer />
                    </div>
                </>
            );       
    };

    return (
        <div>
            <div className="container py-5" style={{ marginTop: "5rem" }}>
                <div className="row py-4">
                    {!product?.title ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
};

export default Product;