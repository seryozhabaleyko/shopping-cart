import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
} from '../constants/actionTypes';
import { defaultErrorMessage } from '../constants/defaults';
import { fetchProductByIdApi } from '../api';

const productRequest = () => ({
    type: GET_PRODUCT_REQUEST,
});

const productSuccess = (product) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: product,
});

const productFailure = (errorMessage = defaultErrorMessage, errorName) => ({
    type: GET_PRODUCT_FAILURE,
    payload: { message: errorMessage, name: errorName },
});

export const fetchProductById = (id) => async (dispatch) => {
    dispatch(productRequest());
    try {
        const product = await fetchProductByIdApi(id);
        dispatch(productSuccess(product));
    } catch (error) {
        dispatch(productFailure(error.message, error.name));
    }
};
