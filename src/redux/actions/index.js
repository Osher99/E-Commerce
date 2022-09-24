import {
    ADDITEMTOCART, DELETEITEMFROMCART, DELETEQUANTITYITEMFROMCART, GET_PRODUCTS, GET_SINGLE_PRODUCT, SET_PRODUCTS, SET_SINGLE_PRODUCT
} from "../../utils/Constants"

// ADD Item
export const addItemToCart = (product) => {
    return {
        type: ADDITEMTOCART,
        payload: product
    }
}

// DELETE Item
export const deleteItemFromCart = (product) => {
    return {
        type: DELETEITEMFROMCART,
        payload: product
    }
}

// DELETE ALL QUANTITY OF ITEM
export const deleteallQuantityItemFromCart = (product) => {
    return {
        type: DELETEQUANTITYITEMFROMCART,
        payload: product
    }
}

// GET ALL PRODUCTS 
export const getProducts = () => ({
    type: GET_PRODUCTS
});

// SET PRODUCTS 
export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products
});

// GET ALL PRODUCTS 
export const getSingleProduct = (id) => ({
    type: GET_SINGLE_PRODUCT,
    payload: id
});

// SET PRODUCTS 
export const setSingleProduct = (product) => ({
    type: SET_SINGLE_PRODUCT,
    product
});
