import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Button } from 'antd';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';

import { addToBasket, removeFromBasket } from '../../actions/cart';
import { getCart } from '../../selectors';

import './AddToCart.scss';

function AddToCart({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector(getCart, shallowEqual);

    const foundOnCart = cart.some((item) => item.id === product.id);

    const onAddToCart = () => {
        dispatch(addToBasket(product));
    };

    const onRemoveFromCart = () => {
        dispatch(removeFromBasket(product.id));
    };

    return foundOnCart ? (
        <Button type="primary" size="large" danger icon={<DeleteOutlined />} onClick={onRemoveFromCart}>
            Убрать из корзины
        </Button>
    ) : (
        <Button
            type="primary"
            size="large"
            icon={<ShoppingCartOutlined />}
            onClick={onAddToCart}
            disabled={!product.maxQuantity}
        >
            Добавить в корзину
        </Button>
    );
}

export default AddToCart;
