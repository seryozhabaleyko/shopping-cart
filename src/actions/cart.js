import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/actionTypes';

export const addToCart = (id) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: id,
    });
};

export const removePhoneFromBasket = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });
};

export const cleanBasket = () => (dispatch) => {
    dispatch({
        type: CLEAR_CART,
    });
};

export const basketCheckout = (phones) => () => {
    alert(JSON.stringify(phones));
};
