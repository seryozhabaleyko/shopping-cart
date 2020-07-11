import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_REQUEST:
            return { ...state, isLoading: true, error: null };
        case GET_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, data: payload };
        case GET_PRODUCT_FAILURE:
            return { ...state, isLoading: false, error: payload };
        default:
            return state;
    }
};
