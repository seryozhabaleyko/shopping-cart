import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Button } from 'antd';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';

import { Product } from '../../store/product/types';
import { addToBasket, removeFromBasket } from '../../store/cart/actions';
import { getCart } from '../../selectors';

import './AddToCart.scss';

interface AddToCartProps {
    product: Product;
}

function AddToCart({ product }: AddToCartProps) {
    const dispatch = useDispatch();
    const cart = useSelector(getCart, shallowEqual);

    const foundOnCart = cart.some((item: { id: string }) => item.id === product.id);

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
