import {
    ProductsState,
    ProductsActionsTypes,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    LOAD_MORE_PRODUCTS_REQUEST,
    LOAD_MORE_PRODUCTS_SUCCESS,
    LOAD_MORE_PRODUCTS_FAILURE,
} from '../products/types';

const initialState: ProductsState = {
    loading: true,
    data: [],
    lastVisible: null,
    total: 0,
    error: null,
    loadingLoadMore: false,
};

function productsReducer(state: ProductsState = initialState, { type, payload }: ProductsActionsTypes): ProductsState {
    switch (type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload.products,
                lastVisible: payload.lastVisible,
                total: payload.total,
            };
        case FETCH_PRODUCTS_FAILURE:
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
}

export default productsReducer;
