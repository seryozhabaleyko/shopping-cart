import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import ProductCard, { ProductCardSkeleton } from '../ProductCard';
import Alert from '../Alert';
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
        const { message = '' } = error;
        return <Alert title={message} />;
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
