import {
    Product,
    Error,
    FetchProduct,
    FetchProductRequest,
    FetchProductSuccess,
    FetchProductFailure,
    FETCH_PRODUCT,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
} from './types';

export const fetchProductById = (id: string): FetchProduct => ({
    type: FETCH_PRODUCT,
    id: id,
});

export const fetchProductRequest = (): FetchProductRequest => ({
    type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (product: Product): FetchProductSuccess => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
});

export const fetchProductFailure = (error: Error): FetchProductFailure => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
});
