import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { FETCH_PRODUCTS } from './../products/types';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from './actions';
import { fetchProductsApi } from '../../api';

function* fetchProducts() {
    try {
        yield put(fetchProductsRequest());
        const products = yield call(fetchProductsApi);
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error));
    }
}

function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}

function* productsSaga() {
    yield all([fork(watchFetchProducts)]);
}

export default productsSaga;
