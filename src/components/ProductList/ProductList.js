import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Alert } from 'antd';

import ProductCard, { ProductCardSkeleton } from '../ProductCard';
import { getCatalog, getCart } from '../../selectors';

import './ProductList.scss';

function ProductList() {
    const { loading, products, error } = useSelector(getCatalog, shallowEqual);
    const cart = useSelector(getCart, shallowEqual);

    if (loading) {
        return (
            <div className="product-list__grid">
                {[...Array(8)].map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        const { name = 'Error', message = 'Something is wrong.' } = error;
        return (
            <div style={{ margin: '2rem 0' }}>
                <Alert message={name} description={message} type="error" showIcon />
            </div>
        );
    }

    const foundOnBasket = (id) => cart.some((item) => item.id === id);

    return (
        <div className="product-list__grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} foundOnBasket={foundOnBasket(product.id)} />
            ))}
        </div>
    );
}

export default ProductList;
