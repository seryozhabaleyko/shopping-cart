import * as R from 'ramda';

import {
    GET_CATALOG_REQUEST,
    GET_CATALOG_SUCCESS,
    GET_CATALOG_FAILURE,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_REQUEST,
    LOAD_MORE_FAILURE,
    SORT_BY,
} from '../constants/actionTypes';

const initialState = {
    isLoading: true,
    data: {},
    error: null,
    sortBy: { key: 'price', type: 'ASC' },
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CATALOG_REQUEST:
            return { ...state, isLoading: true, error: null };
        case GET_CATALOG_SUCCESS:
            return { ...state, isLoading: false, data: R.indexBy(R.prop('id'), payload) };
        case GET_CATALOG_FAILURE:
            return { ...state, isLoading: false, error: payload };

        case LOAD_MORE_REQUEST:
            return { ...state, isLoading: true, error: null };
        case LOAD_MORE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: R.merge(R.prop('data', state), R.indexBy(R.prop('id'), payload)),
            };
        case LOAD_MORE_FAILURE:
            return { ...state, isLoading: false, error: payload };

        case SORT_BY:
            return { ...state, sortBy: payload };

        default:
            return state;
    }
};
