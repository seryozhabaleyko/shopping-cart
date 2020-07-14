import {
    ADD_MANUFACTURER_TO_FILTER,
    REMOVE_MANUFACTURER_FROM_FILTER,
    SET_MIN_PRICE_FILTER,
    SET_MAX_PRICE_FILTER,
    ADD_RAM_TO_FILTER,
    REMOVE_RAM_FROM_FILTER,
} from '../constants/actionTypes';

export const addManufacturerToFilter = (manufacturer) => ({
    type: ADD_MANUFACTURER_TO_FILTER,
    payload: manufacturer,
});

export const removeManufacturerFromFilter = (manufacturer) => ({
    type: REMOVE_MANUFACTURER_FROM_FILTER,
    payload: manufacturer,
});

export const setMinPriceFilter = (minPrice) => ({
    type: SET_MIN_PRICE_FILTER,
    payload: minPrice,
});

export const setMaxPriceFilter = (maxPrice) => ({
    type: SET_MAX_PRICE_FILTER,
    payload: maxPrice,
});

export const addRAMToFilter = (RAM) => ({
    type: ADD_RAM_TO_FILTER,
    payload: RAM,
});

export const removeRAMFromFilter = (RAM) => ({
    type: REMOVE_RAM_FROM_FILTER,
    payload: RAM,
});
