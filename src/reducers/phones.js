import * as R from 'ramda';

import * as types from '../constants/types';
import initialState from '../constants/initialState';

export default (state = initialState.phones, { type, payload }) => {
    switch (type) {
        case types.phones.SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValues);
        case types.phones.LOAD_MORE_SECCESS:
            const moreValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, moreValues);
        case types.phone.SUCCESS:
            return R.assoc(payload.id, payload, state);
        default:
            return state;
    }
};