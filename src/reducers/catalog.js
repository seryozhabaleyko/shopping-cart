import * as R from 'ramda';

import {
    GET_CATALOG_REQUEST,
    GET_CATALOG_SUCCESS,
    GET_CATALOG_FAILURE,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_REQUEST,
    LOAD_MORE_FAILURE,
} from '../constants/actionTypes';

const initialState = {
    loading: true,
    data: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CATALOG_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_CATALOG_SUCCESS:
            return { ...state, loading: false, data: payload };
        case GET_CATALOG_FAILURE:
            return { ...state, loading: false, error: payload };

        case LOAD_MORE_REQUEST:
            return { ...state, loading: true, error: null };
        case LOAD_MORE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: R.merge(R.prop('data', state), R.indexBy(R.prop('id'), payload)),
            };
        case LOAD_MORE_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
