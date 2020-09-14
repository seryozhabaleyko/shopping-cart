import {
    GET_CATALOG_REQUEST,
    GET_CATALOG_SUCCESS,
    GET_CATALOG_FAILURE,
    LOAD_MORE_PRODUCTS_REQUEST,
    LOAD_MORE_PRODUCTS_SUCCESS,
    LOAD_MORE_PRODUCTS_FAILURE,
} from '../constants/actionTypes';

export const fetchProductsSuccess = (products) => ({
    type: GET_CATALOG_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: GET_CATALOG_FAILURE,
    payload: error,
});

export const fetchProducts = (data) => (dispatch) => {
    dispatch({
        type: GET_CATALOG_REQUEST,
        payload: data,
    });
};

export const loadMoreProductsSuccess = (data) => ({
    type: LOAD_MORE_PRODUCTS_SUCCESS,
    payload: data,
});

export const loadMoreProductsFailure = (error) => ({
    type: LOAD_MORE_PRODUCTS_FAILURE,
    payload: error,
});

export const loadMoreProducts = (lastVisible) => async (dispatch) => {
    dispatch({
        type: LOAD_MORE_PRODUCTS_REQUEST,
        payload: { lastVisible },
    });
};
