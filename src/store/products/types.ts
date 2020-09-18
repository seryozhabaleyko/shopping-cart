import { Product } from '../product/types';

export type Loading = boolean;
export type Error = object | string | null;

export interface ProductsState {
    loading: Loading;
    data: Product[];
    error: Error;
    lastVisible: object | null;
    total: number;
    loadingLoadMore: boolean;
}

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export interface FetchProducts {
    type: typeof FETCH_PRODUCTS;
}

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';

export interface FetchProductsRequest {
    type: typeof FETCH_PRODUCTS_REQUEST;
    payload?: any;
}

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export interface FetchProductsSuccess {
    type: typeof FETCH_PRODUCTS_SUCCESS;
    payload: Product[];
}

export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export interface FetchProductsFailure {
    type: typeof FETCH_PRODUCTS_FAILURE;
    payload: Error;
}

export type ProductsActionsTypes = FetchProductsRequest | FetchProductsSuccess | FetchProductsFailure;
