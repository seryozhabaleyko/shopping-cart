import { fetchCatalogApi, loadMoreProductsApi } from '../api';
import {
    GET_CATALOG_REQUEST,
    GET_CATALOG_SUCCESS,
    GET_CATALOG_FAILURE,
    LOAD_MORE_PRODUCTS_REQUEST,
    LOAD_MORE_PRODUCTS_SUCCESS,
    LOAD_MORE_PRODUCTS_FAILURE,
} from '../constants/actionTypes';
import { defaultErrorMessage } from '../constants/defaults';

const fetchCatalogRequest = () => ({
    type: GET_CATALOG_REQUEST,
});

const fetchCatalogSuccess = (phones) => ({
    type: GET_CATALOG_SUCCESS,
    payload: phones,
});

const fetchCatalogFailure = (errorMessage = defaultErrorMessage, errorName) => ({
    type: GET_CATALOG_FAILURE,
    payload: { message: errorMessage, name: errorName },
});

export const fetchCatalog = (queryParameters) => async (dispatch) => {
    dispatch(fetchCatalogRequest());
    try {
        const catalog = await fetchCatalogApi(queryParameters);
        dispatch(fetchCatalogSuccess(catalog));
    } catch (error) {
        dispatch(fetchCatalogFailure(error.message, error.name));
    }
};

const loadMoreProductsRequest = () => ({
    type: LOAD_MORE_PRODUCTS_REQUEST,
});

const loadMoreProductsSuccess = (data) => ({
    type: LOAD_MORE_PRODUCTS_SUCCESS,
    payload: data,
});

const loadMoreProductsFailure = (error) => ({
    type: LOAD_MORE_PRODUCTS_FAILURE,
    payload: error,
});

export const loadMoreProducts = (lastVisible) => async (dispatch) => {
    dispatch(loadMoreProductsRequest());
    try {
        const data = await loadMoreProductsApi(lastVisible);
        dispatch(loadMoreProductsSuccess(data));
    } catch (error) {
        dispatch(loadMoreProductsFailure(error));
    }
};
