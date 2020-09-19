import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Rate, Typography } from 'antd';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import { minusQtyItem, addQtyItem, removeFromBasket } from '../../../../store/cart/actions';
import { Product } from '../../../../store/product/types';

import './CartItem.scss';

const { Title } = Typography;

interface CartItemProps {
    product: Product;
}

function CartItem({ product }: CartItemProps) {
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
            <Link to={`/product/${id}`}>
                <div className="cart-item__image">
                    <img src={photoUrl} alt={title} />
                </div>
            </Link>

            <div className="cart-item__info">
                <header>
                    <Link to={`/product/${id}`}>
                        <Title className="cart-item__title" level={3}>
                            {title}
                        </Title>
                    </Link>
                    <Rate disabled defaultValue={rating} />
                </header>

                <div className="cart-item__count">
                    <div>Количество:</div>
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

                <div className="cart-item__price">
                    <div>Цена:</div>
                    <div>{`$${(price * quantity).toLocaleString()}`}</div>
                </div>

                <div>
                    <Button icon={<DeleteOutlined />} danger onClick={onRemoveFromBasket}>
                        Убрать из корзины
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default CartItem;
