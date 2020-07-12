import {
    ADD_MANUFACTURER_TO_FILTER,
    REMOVE_MANUFACTURER_FROM_FILTER,
    SET_MIN_PRICE_FILTER,
    SET_MAX_PRICE_FILTER,
} from '../constants/actionTypes';

export const addManufacturerToFilter = (manufacturer) => ({
    type: ADD_MANUFACTURER_TO_FILTER,
    payload: manufacturer,
});

export const removeManufacturerFromFilter = (manufacturer) => ({
    type: REMOVE_MANUFACTURER_FROM_FILTER,
    payload: manufacturer,
});

export const setMinPriceFilter = (min) => ({
    type: SET_MIN_PRICE_FILTER,
    payload: min,
});

export const setMaxPriceFilter = (max) => ({
    type: SET_MAX_PRICE_FILTER,
    payload: max,
});
