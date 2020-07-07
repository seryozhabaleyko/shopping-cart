import * as types from '../constants/types';
import { fetchCategories as fetchCategoriesApi } from '../api';

export const fetchCategories = () => async (dispatch) => {
    dispatch({
        type: types.categories.START
    });

    try {
        const phones = await fetchCategoriesApi();
        dispatch({
            type: types.categories.SUCCESS,
            payload: phones
        });
    } catch (err) {
        dispatch({
            type: types.categories.FAILURE,
            payload: err,
            error: true
        });
    }
};