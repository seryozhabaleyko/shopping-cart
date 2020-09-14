import { takeEvery } from 'redux-saga/effects';
import { GET_CATALOG_REQUEST, LOAD_MORE_PRODUCTS_REQUEST, GET_PRODUCT_REQUEST } from '../constants/actionTypes';
import { fetchProducts, loadMoreProducts } from './productsSaga';
import { fetchProduct } from './productSaga';

function* rootSaga() {
    yield takeEvery(GET_CATALOG_REQUEST, fetchProducts);
    yield takeEvery(LOAD_MORE_PRODUCTS_REQUEST, loadMoreProducts);
    yield takeEvery(GET_PRODUCT_REQUEST, fetchProduct);
}

export default rootSaga;
