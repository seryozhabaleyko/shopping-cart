import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography, Badge, Rate, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { addToCart } from '../../actions/cart';

import './ProductCard.scss';

const { Title } = Typography;

function ProductCard({ id, title, photoUrl, price = 0, rating = 0 }) {
    const dispatch = useDispatch();

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

                    <Button
                        type="primary"
                        size="large"
                        icon={<ShoppingCartOutlined />}
                        style={{ marginTop: '1rem' }}
                        block
                        onClick={() => dispatch(addToCart(id))}
                    >
                        В корзину
                    </Button>
                </div>
            </div>
        </Badge.Ribbon>
    );
}

export default ProductCard;
