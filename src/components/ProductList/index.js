import React from 'react';

import Product from '../Product';
import Alert from '../Alert';
import Spinner from '../Spinner';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getCatalog } from '../../selectors';

import styled from './productList.module.scss';

function ProductList() {
    const { isLoading, products, error } = useShallowEqualSelector(getCatalog);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        const { message = '' } = error;
        return <Alert title={message} />;
    }

    return (
        <div className={styled.grid}>
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}

export default ProductList;
