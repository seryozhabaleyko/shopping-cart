import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { FetchProduct, FETCH_PRODUCT } from './types';
import { fetchProductRequest, fetchProductSuccess, fetchProductFailure } from './actions';
import { fetchProductByIdApi } from '../../api';

function* fetchProduct({ id }: FetchProduct) {
    try {
        yield put(fetchProductRequest());
        const product = yield call(fetchProductByIdApi, id);
        yield put(fetchProductSuccess(product));
    } catch (error) {
        yield put(fetchProductFailure(error));
    }
}

function* watchProduct() {
    yield takeEvery(FETCH_PRODUCT, fetchProduct);
}

function* productSaga() {
    yield all([fork(watchProduct)]);
}

export default productSaga;
