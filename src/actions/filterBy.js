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

export const setFilterByPrice = (price) => ({
    type: SET_FILTER_BY_PRICE,
    payload: price,
});

export const setOrderBy = (orderBy) => ({
    type: SET_ORDER_BY,
    payload: orderBy,
});
