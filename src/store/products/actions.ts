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
    LoadMoreProducts,
    LOAD_MORE_PRODUCTS,
    LoadMoreProductsRequest,
    LOAD_MORE_PRODUCTS_REQUEST,
    LoadMoreProductsSuccess,
    LOAD_MORE_PRODUCTS_SUCCESS,
    LoadMoreProductsFailure,
    LOAD_MORE_PRODUCTS_FAILURE,
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

export const loadMoreProducts = (lastVisible: any): LoadMoreProducts => ({
    type: LOAD_MORE_PRODUCTS,
    lastVisible,
});

export const loadMoreProductsRequest = (): LoadMoreProductsRequest => ({
    type: LOAD_MORE_PRODUCTS_REQUEST,
});

export const loadMoreProductsSuccess = (products: Product[]): LoadMoreProductsSuccess => ({
    type: LOAD_MORE_PRODUCTS_SUCCESS,
    payload: products,
});

export const loadMoreProductsFailure = (error: Error): LoadMoreProductsFailure => ({
    type: LOAD_MORE_PRODUCTS_FAILURE,
    payload: error,
});
