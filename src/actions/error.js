import * as types from '../constants/types';

export const createError = (error, info) => ({
    type: types.app.ERROR,
    error,
    info
});