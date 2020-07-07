import * as types from '../constants/types';

export const addPhoneToBasket = (id) => (dispatch) => {
    dispatch({
        type: types.basket.ADD,
        payload: id
    });
};

export const removePhoneFromBasket = (id) => (dispatch) => {
    dispatch({
        type: types.basket.REMOVE,
        payload: id
    });
};

export const cleanBasket = () => (dispatch) => {
    dispatch({
        type: types.basket.CLEAN
    });
};

export const basketCheckout = (phones) => () => {
    alert(JSON.stringify(phones));
};