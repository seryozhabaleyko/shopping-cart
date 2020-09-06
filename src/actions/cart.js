import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, ADD_QTY_ITEM, MINUS_QTY_ITEM } from '../constants/actionTypes';

export const addToBasket = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromBasket = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const cleanBasket = () => ({
    type: CLEAR_CART,
});

export const basketCheckout = (phones) => () => {
    alert(JSON.stringify(phones));
};

export const addQtyItem = (id) => ({
    type: ADD_QTY_ITEM,
    payload: id,
});

export const minusQtyItem = (id) => ({
    type: MINUS_QTY_ITEM,
    payload: id,
});
