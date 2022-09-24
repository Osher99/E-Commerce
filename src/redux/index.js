import { takeEvery, all } from 'redux-saga/effects';
import {
    ADDITEMTOCART,
    DELETEITEMFROMCART,
    DELETEQUANTITYITEMFROMCART,
    GET_PRODUCTS, GET_SINGLE_PRODUCT
} from '../utils/Constants';
import {
    addItemToCart,
    deleteallQuantityItemFromCart,
    deleteItemFromCart,
} from './actions';
import { handleGetProducts, handleGetProductById } from './sagas/handlers';

function* productsWatcher() {
    yield takeEvery(GET_PRODUCTS, handleGetProducts);
    yield takeEvery(ADDITEMTOCART, addItemToCart);
    yield takeEvery(DELETEITEMFROMCART, deleteItemFromCart);
    yield takeEvery(DELETEQUANTITYITEMFROMCART, deleteallQuantityItemFromCart);
    yield takeEvery(GET_SINGLE_PRODUCT, handleGetProductById);
}

export default function* rootSaga() {
    yield all([
        productsWatcher()
    ]);
}