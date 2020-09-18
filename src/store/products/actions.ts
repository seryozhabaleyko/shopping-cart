import { Product } from './../product/types';
import {
    Error,
    FetchProducts,
    FetchProductsRequest,
    FetchProductsSuccess,
    FetchProductsFailure,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from './types';

export const fetchProducts = (): FetchProducts => ({
    type: FETCH_PRODUCTS,
});

export const fetchProductsRequest = (): FetchProductsRequest => ({
    type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]): FetchProductsSuccess => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error: Error): FetchProductsFailure => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
});
