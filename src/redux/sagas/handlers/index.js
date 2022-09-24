import {call,put } from 'redux-saga/effects';
import { getProducts, getSingleProductById } from '../../requests';
import { setProducts, setSingleProduct } from '../../actions';

export function* handleGetProducts() {
     try {
         const response = yield call(getProducts)
         yield put(setProducts(response));
     } catch (e) {
         console.log(e);
     }
}
export function* handleGetProductById(action) {
    try {
        const response = yield call(getSingleProductById, action.payload)
        yield put(setSingleProduct(response));
    } catch (e) {
        console.log(e);
    }
}

