import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from '../constants/actionTypes';

const initialState = {
    loading: false,
    data: {},
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_PRODUCT_SUCCESS:
            return { ...state, loading: false, data: payload };
        case GET_PRODUCT_FAILURE:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};
