import * as R from 'ramda';

import {
	GET_CATEGORIES_REQUEST,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORIES_FAILURE
} from '../constants/actionTypes';

const initialState = {
	isLoading: false,
	data: [],
	errorMessage: null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_CATEGORIES_REQUEST:
			return { ...state, isLoading: true, errorMessage: null };
		case GET_CATEGORIES_SUCCESS:
			return { ...state, isLoading: false, data: R.indexBy(R.prop('id'), payload) };
		case GET_CATEGORIES_FAILURE:
			return { ...state, isLoading: false, errorMessage: payload };
		default:
			return state;
	}
};
