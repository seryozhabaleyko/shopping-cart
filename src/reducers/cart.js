import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, ADD_QTY_ITEM, MINUS_QTY_ITEM } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            return state.some((product) => product.id === payload.id) ? state : [...state, { ...payload, quantity: 1 }];
        case REMOVE_FROM_CART:
            return state.filter((product) => product.id !== payload);
        case CLEAR_CART:
            return initialState;
        case ADD_QTY_ITEM:
            return state.map((product) => {
                if (product.id === payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });
        case MINUS_QTY_ITEM:
            return state.map((product) => {
                if (product.id === payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                    };
                }
                return product;
            });
        default:
            return state;
    }
};
