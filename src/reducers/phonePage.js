import * as R from 'ramda';

import initialState from '../constants/initialState';
import * as types from '../constants/types';

export default (state = initialState.phonePage, { type, payload }) => {
    switch (type) {
        case types.phone.SUCCESS:
            return R.merge(state, {
                id: R.prop('id', payload)
            });
        default:
            return state;
    }
};