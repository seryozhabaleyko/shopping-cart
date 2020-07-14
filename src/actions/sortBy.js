import { SORT_BY } from '../constants/actionTypes';

export const sortBy = (sort) => ({
    type: SORT_BY,
    payload: sort,
});
