import {
    ADD_MANUFACTURER_TO_FILTER,
    REMOVE_MANUFACTURER_FROM_FILTER,
    SET_MIN_PRICE_FILTER,
    SET_MAX_PRICE_FILTER,
    ADD_FILTER_BY_RAM,
    REMOVE_FILTER_BY_RAM,
    ADD_FILTER_BY_BRAND,
    ADD_FILTER_BY_PRICE,
    REMOVE_FILTER_BY_BRAND,
    REMOVE_FILTER_BY_PRICE,
    SET_ORDER_BY,
    ADD_FILTER_BY_INTERNAL_STORAGE,
    REMOVE_FILTER_BY_INTERNAL_STORAGE,
} from '../constants/actionTypes';

export const addFilterByBrand = (brand) => ({
    type: ADD_FILTER_BY_BRAND,
    payload: brand,
});

export const removeFilterByBrand = (brand) => ({
    type: REMOVE_FILTER_BY_BRAND,
    payload: brand,
});

export const addFilterByRAM = (ram) => ({
    type: ADD_FILTER_BY_RAM,
    payload: ram,
});

export const removeFilterByRAM = (ram) => ({
    type: REMOVE_FILTER_BY_RAM,
    payload: ram,
});

export const addFilterByInternalStorage = (gb) => ({
    type: ADD_FILTER_BY_INTERNAL_STORAGE,
    payload: gb,
});

export const removeFilterByInternalStorage = (gb) => ({
    type: REMOVE_FILTER_BY_INTERNAL_STORAGE,
    payload: gb,
});

/**
 * olo
 */

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
