import { Reducer } from 'redux';

import {
    ProductState,
    ProductActionsTypes,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
} from './types';

const initialState: ProductState = {
    loading: false,
    data: {
        id: '',
        title: '',
        photoUrl: '',
        price: 0,
        rating: 0,
        quantity: 0,
        maxQuantity: 0,
        createdAt: {},
        brand: '',
        ram: '',
        internalStorage: '',
    },
    error: null,
};

const productReducer: Reducer<ProductState, ProductActionsTypes> = (
    state: ProductState = initialState,
    { type, payload }: ProductActionsTypes,
): ProductState => {
    switch (type) {
        case FETCH_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCT_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_PRODUCT_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};

export default productReducer;
