import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Skeleton } from 'antd';

import ProductCard, { ProductCardSkeleton } from '../ProductCard';
import Alert from '../Alert';
import { getCatalog } from '../../selectors';

import './ProductList.scss';

function ProductList() {
    const { loading, products, error } = useSelector(getCatalog, shallowEqual);

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

    return (
        <div className="product-list__grid">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}

export default ProductList;
