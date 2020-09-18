import { Product } from '../product/types';
import {
    ADD_TO_CART,
    AddToCartAction,
    REMOVE_FROM_CART,
    RemoveFromCartAction,
    CLEAR_CART,
    ClearCartAction,
    ADD_QTY_ITEM,
    AddQtyItemAction,
    MINUS_QTY_ITEM,
    MinusQtyItemAction,
} from './types';

export const addToBasket = (product: Product): AddToCartAction => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromBasket = (id: string): RemoveFromCartAction => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const clearCart = (): ClearCartAction => ({
    type: CLEAR_CART,
});

export const addQtyItem = (id: string): AddQtyItemAction => ({
    type: ADD_QTY_ITEM,
    payload: id,
});

export const minusQtyItem = (id: string): MinusQtyItemAction => ({
    type: MINUS_QTY_ITEM,
    payload: id,
});
