import * as R from 'ramda';

import {
    SET_MIN_PRICE_FILTER,
    SET_MAX_PRICE_FILTER,
    ADD_RAM_TO_FILTER,
    REMOVE_RAM_FROM_FILTER,
    ADD_FILTER_BY_BRAND,
    ADD_FILTER_BY_PRICE,
    REMOVE_FILTER_BY_BRAND,
    REMOVE_FILTER_BY_PRICE,
    SET_ORDER_BY,
} from '../constants/actionTypes';

const initialState = {
    brand: [],
    price: { min: null, max: null },
    ram: [],
    orderBy: 'date-desc',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FILTER_BY_BRAND:
            return {
                ...state,
                brand: R.concat(R.prop('brand', state), [payload]),
            };
        case REMOVE_FILTER_BY_BRAND:
            return {
                ...state,
                brand: R.without(payload, R.prop('brand', state)),
            };

        case SET_MIN_PRICE_FILTER:
            return {
                ...state,
                price: R.assoc('min', payload, R.prop('price', state)),
            };
        case SET_MAX_PRICE_FILTER:
            return {
                ...state,
                price: R.assoc('max', payload, R.prop('price', state)),
            };

        case ADD_RAM_TO_FILTER:
            return {
                ...state,
                ram: R.concat(R.prop('ram', state), [payload]),
            };
        case REMOVE_RAM_FROM_FILTER:
            return {
                ...state,
                ram: R.without(payload, R.prop('ram', state)),
            };

        case SET_ORDER_BY:
            return { ...state, orderBy: payload };

        default:
            return state;
    }
};
