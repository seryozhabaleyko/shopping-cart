import {
	GET_CATEGORIES_REQUEST,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORIES_FAILURE
} from '../constants/actionTypes';
import { fetchCategories as fetchCategoriesApi } from '../api';
import { defaultErrorMessage } from '../constants/defaults';

const categoriesRequest = () => ({
	type: GET_CATEGORIES_REQUEST
});

const categoriesSuccess = (categories) => ({
	type: GET_CATEGORIES_SUCCESS,
	payload: categories
});

const categoriesFailure = (errorMessage = defaultErrorMessage) => ({
	type: GET_CATEGORIES_FAILURE,
	payload: errorMessage
});

export const fetchCategories = () => async (dispatch) => {
	dispatch(categoriesRequest());
	try {
		const categories = await fetchCategoriesApi();
		dispatch(categoriesSuccess(categories));
	} catch (error) {
		dispatch(categoriesFailure(error));
	}
};
