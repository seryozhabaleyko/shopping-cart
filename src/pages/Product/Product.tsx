import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Typography, Badge, Rate, Alert } from 'antd';

import Layout from '../../components/Layout';
import AddToCart from '../../components/AddToCart';
import ProductLoader from './ProductLoader';
import { getProduct } from '../../selectors';

import './Product.scss';

const { Title } = Typography;

function Product() {
    const { loading, product, error } = useSelector(getProduct, shallowEqual);

    if (loading) {
        return (
            <Layout breakpoint="xl">
                <ProductLoader />
            </Layout>
        );
    }

    if (error) {
        const { name = 'Error', message = 'Something is wrong.' } = error;
        return <Alert message={name} description={message} type="error" showIcon />;
    }

    const { title = '', photoUrl = '', price = 0, rating = 0, maxQuantity = 0 } = product;

    const ribbonProps = maxQuantity ? { text: 'В наличии' } : { text: 'Нет в наличии', color: 'cyan' };

    return (
        <Layout breakpoint="xl">
            <div className="product">
                <header className="product__heading">
                    <h1 className="product__title">{title}</h1>
                    <Rate allowHalf defaultValue={rating} />
                </header>

                <div className="product__grid">
                    <Badge.Ribbon {...ribbonProps} placement="start">
                        <div className="product__image">
                            <img src={photoUrl} alt={title} />
                        </div>
                    </Badge.Ribbon>

                    <div className="product__body">
                        <Title level={4}>Основные характеристики</Title>
                        <div>
                            <ul>
                                <li>
                                    <span>Диагональ дисплея</span>
                                    <span> 6.5 "</span>
                                </li>
                                <li>
                                    <span>Объем встроенной памяти</span>
                                    <span> 128 ГБ</span>
                                </li>
                                <li>
                                    <span>Основная камера</span>
                                    <span> 64+12+5+5 Мп</span>
                                </li>
                            </ul>
                        </div>

                        <div className="product-quick-info-colors">
                            <Title level={4}>Цвет:</Title>
                            <div className="product-color-items">
                                <button>1</button>
                                <button>2</button>
                            </div>
                        </div>

                        <div className="product-quick-info-memory">
                            <Title level={4}>Объем памяти:</Title>
                            <div className="product-memory-items">
                                <button>256 ГБ</button>
                            </div>
                        </div>

                        <div className="price-block-full-price-offer-final">
                            <Title level={4}>Итого к оплате:</Title>
                            <p>
                                <span>{price}</span>
                                <span>руб.</span>
                            </p>
                        </div>

                        <div>
                            <AddToCart product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Product;
