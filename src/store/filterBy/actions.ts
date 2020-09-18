import {
    AddFilterByBrand,
    ADD_FILTER_BY_BRAND,
    RemoveFilterByBrand,
    REMOVE_FILTER_BY_BRAND,
    AddFilterByRAM,
    ADD_FILTER_BY_RAM,
    RemoveFilterByRAM,
    REMOVE_FILTER_BY_RAM,
    AddFilterByInternalStorage,
    ADD_FILTER_BY_INTERNAL_STORAGE,
    RemoveFilterByInternalStorage,
    REMOVE_FILTER_BY_INTERNAL_STORAGE,
    SetFilterByPrice,
    SET_FILTER_BY_PRICE,
    SetOrderBy,
    SET_ORDER_BY,
} from './types';

export const addFilterByBrand = (brand: string): AddFilterByBrand => ({
    type: ADD_FILTER_BY_BRAND,
    payload: brand,
});

export const removeFilterByBrand = (brand: string): RemoveFilterByBrand => ({
    type: REMOVE_FILTER_BY_BRAND,
    payload: brand,
});

export const addFilterByRAM = (ram: string): AddFilterByRAM => ({
    type: ADD_FILTER_BY_RAM,
    payload: ram,
});

export const removeFilterByRAM = (ram: string): RemoveFilterByRAM => ({
    type: REMOVE_FILTER_BY_RAM,
    payload: ram,
});

export const addFilterByInternalStorage = (gb: string): AddFilterByInternalStorage => ({
    type: ADD_FILTER_BY_INTERNAL_STORAGE,
    payload: gb,
});

export const removeFilterByInternalStorage = (gb: string): RemoveFilterByInternalStorage => ({
    type: REMOVE_FILTER_BY_INTERNAL_STORAGE,
    payload: gb,
});

export const setFilterByPrice = (price: number[]): SetFilterByPrice => ({
    type: SET_FILTER_BY_PRICE,
    payload: price,
});

export const setOrderBy = (orderBy: string): SetOrderBy => ({
    type: SET_ORDER_BY,
    payload: orderBy,
});
