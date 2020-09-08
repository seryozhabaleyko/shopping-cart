import {
    GET_CATALOG_REQUEST,
    GET_CATALOG_SUCCESS,
    GET_CATALOG_FAILURE,
    LOAD_MORE_PRODUCTS_REQUEST,
    LOAD_MORE_PRODUCTS_SUCCESS,
    LOAD_MORE_PRODUCTS_FAILURE,
} from '../constants/actionTypes';

const initialState = {
    loading: true,
    data: [],
    lastVisible: null,
    total: 0,
    error: null,
    loadingLoadMore: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CATALOG_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.products,
                lastVisible: payload.lastVisible,
                total: payload.total,
            };
        case GET_CATALOG_FAILURE:
            return { ...state, loading: false, error: payload };

        case LOAD_MORE_PRODUCTS_REQUEST:
            return { ...state, loadingLoadMore: true, error: null };
        case LOAD_MORE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loadingLoadMore: false,
                data: [...state.data, ...payload.products],
                lastVisible: payload.lastVisible,
            };
        case LOAD_MORE_PRODUCTS_FAILURE:
            return { ...state, loadingLoadMore: false, error: payload };

        default:
            return state;
    }
};
