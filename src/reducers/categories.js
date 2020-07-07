import * as R from 'ramda';

import * as types from '../constants/types';
import initialState from '../constants/initialState';

export default (state = initialState.categories, { type, payload }) => {
    switch (type) {
        case types.categories.SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValues);
        default:
            return state;
    }
};
