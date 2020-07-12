// import * as R from 'ramda';
import {
    ADD_MANUFACTURER_TO_FILTER,
    REMOVE_MANUFACTURER_FROM_FILTER,
} from '../constants/actionTypes';

const initialState = {
    manufacturer: [],
    price: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MANUFACTURER_TO_FILTER:
            return {
                ...state,
                manufacturer: state.manufacturer.concat(payload),
            };
        case REMOVE_MANUFACTURER_FROM_FILTER:
            return {
                ...state,
                manufacturer: state.manufacturer.filter((item) => item !== payload),
            };
        default:
            return state;
    }
};
