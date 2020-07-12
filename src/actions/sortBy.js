import { SORT_BY } from '../constants/actionTypes';

const sortBy = (sortType) => ({
    type: SORT_BY,
    payload: sortType,
});
