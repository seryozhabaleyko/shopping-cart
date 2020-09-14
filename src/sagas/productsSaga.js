import { call, put } from 'redux-saga/effects';
import { fetchCatalogApi, loadMoreProductsApi } from '../api';
import {
    fetchProductsSuccess,
    fetchProductsFailure,
    loadMoreProductsSuccess,
    loadMoreProductsFailure,
} from '../actions/catalog';

export function* fetchProducts({ payload }) {
    try {
        const response = yield call(fetchCatalogApi, payload.limit);
        yield put(fetchProductsSuccess(response));
    } catch (error) {
        yield put(fetchProductsFailure(error));
    }
}

export function* loadMoreProducts({ payload }) {
    try {
        const response = yield call(loadMoreProductsApi, payload.lastVisible);
        yield put(loadMoreProductsSuccess(response));
    } catch (error) {
        yield put(loadMoreProductsFailure(error));
    }
}
