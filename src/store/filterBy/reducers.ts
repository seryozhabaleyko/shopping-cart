import {
    FilterByState,
    FilterByActionType,
    ADD_FILTER_BY_BRAND,
    REMOVE_FILTER_BY_BRAND,
    SET_FILTER_BY_PRICE,
    ADD_FILTER_BY_RAM,
    REMOVE_FILTER_BY_RAM,
    ADD_FILTER_BY_INTERNAL_STORAGE,
    REMOVE_FILTER_BY_INTERNAL_STORAGE,
    SET_ORDER_BY,
} from './types';

const initialState: FilterByState = {
    brand: [],
    price: [0, 9999],
    ram: [],
    internalStorage: [],
    orderBy: 'date-desc',
};

function filterByReducer(state: FilterByState = initialState, action: FilterByActionType): FilterByState {
    switch (action.type) {
        case ADD_FILTER_BY_BRAND:
            return {
                ...state,
                brand: [...state.brand, action.payload],
            };
        case REMOVE_FILTER_BY_BRAND:
            return {
                ...state,
                brand: state.brand.filter((filter) => filter !== action.payload),
            };

        case SET_FILTER_BY_PRICE:
            return {
                ...state,
                price: action.payload,
            };

        case ADD_FILTER_BY_RAM:
            return {
                ...state,
                ram: [...state.ram, action.payload],
            };
        case REMOVE_FILTER_BY_RAM:
            return {
                ...state,
                ram: state.ram.filter((ram) => ram !== action.payload),
            };

        case ADD_FILTER_BY_INTERNAL_STORAGE:
            return {
                ...state,
                internalStorage: [...state.internalStorage, action.payload],
            };
        case REMOVE_FILTER_BY_INTERNAL_STORAGE:
            return {
                ...state,
                internalStorage: state.internalStorage.filter((is) => is !== action.payload),
            };

        case SET_ORDER_BY:
            return { ...state, orderBy: action.payload };

        default:
            return state;
    }
}

export default filterByReducer;
