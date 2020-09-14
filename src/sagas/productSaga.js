import { call, put } from 'redux-saga/effects';
import { fetchProductByIdApi } from '../api';
import { fetchProductSuccess, fetchProductFailure } from '../actions/product';

export function* fetchProduct({ payload }) {
    try {
        const response = yield call(fetchProductByIdApi, payload.id);
        yield put(fetchProductSuccess(response));
    } catch (error) {
        yield put(fetchProductFailure(error));
    }
}
