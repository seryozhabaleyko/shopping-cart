import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Rate } from 'antd';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import { minusQtyItem, addQtyItem, removeFromBasket } from '../../../../actions/cart';

import './CartItem.scss';

function CartItem({ product = {} }) {
    const dispatch = useDispatch();
    const { id, title, photoUrl, price, rating, quantity, maxQuantity } = product;

    const onAddQty = () => {
        if (quantity < maxQuantity) {
            dispatch(addQtyItem(id));
        }
    };

    const onMinusQty = () => {
        if (maxQuantity >= quantity && quantity !== 0) {
            dispatch(minusQtyItem(id));
        }
    };

    const onRemoveFromBasket = () => dispatch(removeFromBasket(id));

    return (
        <article className="cart-item">
            <div className="cart-item__image">
                <img src={photoUrl} alt={title} />
            </div>

            <div className="cart-item__info">
                <header>
                    <h3>{title}</h3>
                    <Rate disabled defaultValue={rating} />
                </header>

                <div>
                    <p>Количество:</p>
                    <Button.Group>
                        <Button disabled={quantity <= 1} onClick={onMinusQty}>
                            <MinusOutlined />
                        </Button>
                        <Button disabled>{quantity}</Button>
                        <Button disabled={quantity >= maxQuantity} onClick={onAddQty}>
                            <PlusOutlined />
                        </Button>
                    </Button.Group>
                </div>

                <Button icon={<DeleteOutlined />} danger onClick={onRemoveFromBasket}>
                    Убрать из корзины
                </Button>
            </div>

            <div className="cart-item__price">{`$${(price * quantity).toLocaleString()}`}</div>
        </article>
    );
}

export default CartItem;