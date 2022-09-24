import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart, getProducts } from '../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'underscore';
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector((state) => state.products.products, _.isEqual);
    const [filter, setFilter] = useState(products);
    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        setFilter(products);
    }, [dispatch, products]);

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

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    }
    const filterProduct = (category) => {
        const updatedList = products.filter((x) => x?.category?.name === category);
        setFilter(updatedList);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    const handleOnChange = (e) => {
        setInputVal(e?.target.value)
        if (e?.target.value === '') {
            setFilter(products)
            return;
        }
        const updatedList = products.filter((x) => x?.title.toLowerCase().includes(inputVal.toLowerCase()));
        setFilter(updatedList);
    }

    const renderSearchBar = () => {
        return (
            <div className="col-md-3" style={{ marginBottom: "20px", marginTop: "-50px" }}>
                <form onSubmit={handleOnSubmit}>
                    <input className="search" type="search" placeholder="Search..." onChange={handleOnChange} value={inputVal} />
                </form>
            </div>
        );
    }

    const ShowProducts = () => {
        return (
            <>
                {filter && filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4" key={product?.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product?.images[0]} className="card-img-top" alt={product?.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product?.title.substring(0, 12)}</h5>
                                    <p className="card-text text-center p-4">
                                        {product?.description}
                                    </p>
                                    <p className="card-text lead fw-bold">
                                        ${product?.price}
                                    </p>
                                    <NavLink to={`/products/${product?.id}`} className="btn btn-outline-dark">
                                        Details
                                    </NavLink>
                                    <button onClick={() => addProduct(product)} className="btn btn-outline-dark ms-2">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bold text-center">
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                {renderSearchBar()}
                <hr />

                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(products)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Clothes")}>Clothes</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Shoes")}>Shoes</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Furniture")}>Furniture</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Electronics")}>Electronics</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Others")}>Others</button>
                </div>
                    {products.length === 0 ? <Loading /> : <ShowProducts />}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Products;