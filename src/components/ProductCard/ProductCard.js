import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography, Badge, Rate, Button } from 'antd';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';

import { addToBasket, removeFromBasket } from '../../actions/cart';

import './ProductCard.scss';

const { Title } = Typography;

function ProductCard({ product, foundOnBasket }) {
    const dispatch = useDispatch();
    const { id, title, photoUrl, price = 0, rating = 0 } = product;

    const handleAddToBasketClick = () => dispatch(addToBasket(product));
    const handleRemoveFromBasketClick = () => dispatch(removeFromBasket(product.id));

    return (
        <Badge.Ribbon text="В наличии" placement="start">
            <div className="product-card">
                <div className="product-card__image">
                    <Link to={`/product/${id}`}>
                        <img src={photoUrl} loading="lazy" alt={title} style={{ display: 'block' }} />
                    </Link>
                </div>

                <div className="product-card__content">
                    <Link to={`/product/${id}`}>
                        <Title className="product-card__title" level={5}>
                            {title}
                        </Title>
                    </Link>

                    <div className="product-card__price">{`$${price.toLocaleString()}`}</div>

                    <Rate disabled defaultValue={rating} />

                    {foundOnBasket ? (
                        <Button
                            type="primary"
                            size="large"
                            icon={<DeleteOutlined />}
                            style={{ marginTop: '1rem' }}
                            block
                            danger
                            onClick={handleRemoveFromBasketClick}
                        >
                            Из корзины
                        </Button>
                    ) : (
                        <Button
                            type="primary"
                            size="large"
                            icon={<ShoppingCartOutlined />}
                            style={{ marginTop: '1rem' }}
                            block
                            onClick={handleAddToBasketClick}
                        >
                            В корзину
                        </Button>
                    )}
                </div>
            </div>
        </Badge.Ribbon>
    );
}
ProductCard.propType = {
    product: PropTypes.object.isRequired,
    foundOnBasket: PropTypes.bool,
};

export default ProductCard;
