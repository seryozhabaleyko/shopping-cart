export type Loading = boolean;
export type Error = { name?: string; message?: string } | null;
export interface Product {
    id: string;
    title: string;
    photoUrl: string;
    price: number;
    rating: number;
    quantity: number;
    maxQuantity: number;
    createdAt: any;
    brand: string;
    ram: string;
    internalStorage: string;
}

export interface ProductState {
    readonly loading: Loading;
    readonly data: Product;
    readonly error: Error;
}

export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export interface FetchProduct {
    type: typeof FETCH_PRODUCT;
    id: string;
}

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';

export interface FetchProductRequest {
    type: typeof FETCH_PRODUCT_REQUEST;
    payload?: any;
}

export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';

export interface FetchProductSuccess {
    type: typeof FETCH_PRODUCT_SUCCESS;
    payload: Product;
}

export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export interface FetchProductFailure {
    type: typeof FETCH_PRODUCT_FAILURE;
    payload: Error;
}

export type ProductActionsTypes = FetchProductRequest | FetchProductSuccess | FetchProductFailure;
