import {
    ADD_MANUFACTURER_TO_FILTER,
    REMOVE_MANUFACTURER_FROM_FILTER,
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

export const addFilterByBrand = (brand) => ({
    type: ADD_FILTER_BY_BRAND,
    payload: brand,
});

export const removeFilterByBrand = (brand) => ({
    type: REMOVE_FILTER_BY_BRAND,
    payload: brand,
});

export const addFilterByPrice = (price) => ({
    type: ADD_FILTER_BY_PRICE,
    payload: price,
});

export const removeFilterByPrice = (price) => ({
    type: REMOVE_FILTER_BY_PRICE,
    payload: price,
});

export const setOrderBy = (orderBy) => ({
    type: SET_ORDER_BY,
    payload: orderBy,
});

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
