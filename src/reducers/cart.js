import * as R from 'ramda';

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            return R.append(payload, state);
        case REMOVE_FROM_CART:
            return R.without(R.of(payload), state);
        case CLEAR_CART:
            return initialState;
        default:
            return state;
    }
};
