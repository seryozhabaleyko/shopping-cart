export interface FilterByState {
    brand: string[];
    price: number[];
    ram: string[];
    internalStorage: string[];
    orderBy: string;
}

export const ADD_FILTER_BY_BRAND = 'ADD_FILTER_BY_BRAND';

export interface AddFilterByBrand {
    type: typeof ADD_FILTER_BY_BRAND;
    payload: string;
}

export const REMOVE_FILTER_BY_BRAND = 'REMOVE_FILTER_BY_BRAND';

export interface RemoveFilterByBrand {
    type: typeof REMOVE_FILTER_BY_BRAND;
    payload: string;
}

export const ADD_FILTER_BY_RAM = 'ADD_FILTER_BY_RAM';

export interface AddFilterByRAM {
    type: typeof ADD_FILTER_BY_RAM;
    payload: string;
}

export const REMOVE_FILTER_BY_RAM = 'REMOVE_FILTER_BY_RAM';

export interface RemoveFilterByRAM {
    type: typeof REMOVE_FILTER_BY_RAM;
    payload: string;
}

export const ADD_FILTER_BY_INTERNAL_STORAGE = 'ADD_FILTER_BY_INTERNAL_STORAGE';

export interface AddFilterByInternalStorage {
    type: typeof ADD_FILTER_BY_INTERNAL_STORAGE;
    payload: string;
}

export const REMOVE_FILTER_BY_INTERNAL_STORAGE = 'REMOVE_FILTER_BY_INTERNAL_STORAGE';

export interface RemoveFilterByInternalStorage {
    type: typeof REMOVE_FILTER_BY_INTERNAL_STORAGE;
    payload: string;
}

export const SET_FILTER_BY_PRICE = 'SET_FILTER_BY_PRICE';

export interface SetFilterByPrice {
    type: typeof SET_FILTER_BY_PRICE;
    payload: number[];
}

export const SET_ORDER_BY = 'SET_ORDER_BY';

export interface SetOrderBy {
    type: typeof SET_ORDER_BY;
    payload: string;
}

export type FilterByActionType =
    | AddFilterByBrand
    | RemoveFilterByBrand
    | AddFilterByRAM
    | RemoveFilterByRAM
    | AddFilterByInternalStorage
    | RemoveFilterByInternalStorage
    | SetFilterByPrice
    | SetOrderBy;
