import { ORDER_BY_ASC, ORDER_BY_DESC, SORT_BY } from '../constants/actionTypes';

const initialState = '';

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SORT_BY:
            return payload;
        case ORDER_BY_ASC:
            return { ...state };
        case ORDER_BY_DESC:
            return { ...state };
        default:
            return state;
    }
};
