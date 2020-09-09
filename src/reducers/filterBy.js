import * as R from 'ramda';

import {
    SET_FILTER_BY_PRICE,
    ADD_FILTER_BY_RAM,
    REMOVE_FILTER_BY_RAM,
    ADD_FILTER_BY_BRAND,
    REMOVE_FILTER_BY_BRAND,
    SET_ORDER_BY,
    ADD_FILTER_BY_INTERNAL_STORAGE,
    REMOVE_FILTER_BY_INTERNAL_STORAGE,
} from '../constants/actionTypes';

const initialState = {
    brand: [],
    price: [0, 9999],
    ram: [],
    internalStorage: [],
    orderBy: 'date-desc',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FILTER_BY_BRAND:
            return {
                ...state,
                brand: R.concat(R.prop('brand', state), [String(payload).toLowerCase()]),
            };
        case REMOVE_FILTER_BY_BRAND:
            return {
                ...state,
                brand: R.without(String(payload).toLowerCase(), R.prop('brand', state)),
            };

        case SET_FILTER_BY_PRICE:
            return {
                ...state,
                price: payload,
            };

        case ADD_FILTER_BY_RAM:
            return {
                ...state,
                ram: R.concat(R.prop('ram', state), [String(payload).toLowerCase()]),
            };
        case REMOVE_FILTER_BY_RAM:
            return {
                ...state,
                ram: R.without(String(payload).toLowerCase(), R.prop('ram', state)),
            };

        case ADD_FILTER_BY_INTERNAL_STORAGE:
            return {
                ...state,
                internalStorage: R.concat(R.prop('internalStorage', state), [String(payload).toLowerCase()]),
            };
        case REMOVE_FILTER_BY_INTERNAL_STORAGE:
            return {
                ...state,
                internalStorage: R.without(String(payload).toLowerCase(), R.prop('internalStorage', state)),
            };

        case SET_ORDER_BY:
            return { ...state, orderBy: payload };

        default:
            return state;
    }
};
