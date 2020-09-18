import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { FETCH_PRODUCTS, LOAD_MORE_PRODUCTS, LoadMoreProducts } from './../products/types';
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    loadMoreProductsSuccess,
    loadMoreProductsFailure,
    loadMoreProductsRequest,
} from './actions';
import { fetchProductsApi, loadMoreProductsApi } from '../../api';

function* fetchProducts() {
    try {
        yield put(fetchProductsRequest());
        const products = yield call(fetchProductsApi);
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure(error));
    }
}

function* loadMoreProducts({ lastVisible }: LoadMoreProducts) {
    try {
        yield put(loadMoreProductsRequest());
        const products = yield call(loadMoreProductsApi, lastVisible);
        yield put(loadMoreProductsSuccess(products));
    } catch (error) {
        yield put(loadMoreProductsFailure(error));
    }
}

function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
    yield takeEvery(LOAD_MORE_PRODUCTS, loadMoreProducts);
}

function* productsSaga() {
    yield all([fork(watchFetchProducts)]);
}

export default productsSaga;
