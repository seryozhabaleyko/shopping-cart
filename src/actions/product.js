import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from '../constants/actionTypes';

export const fetchProductSuccess = (product) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: product,
});

export const fetchProductFailure = (error) => ({
    type: GET_PRODUCT_FAILURE,
    payload: error,
});

export const fetchProductById = (id) => async (dispatch) => {
    dispatch({
        type: GET_PRODUCT_REQUEST,
        payload: { id },
    });
};
