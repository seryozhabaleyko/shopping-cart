import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchProductById } from '../actions/product';
import Product from '../pages/Product';

function ProductContainer({ addToCart }) {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [id]);

    return <Product addToCart={addToCart} />;
}

export default ProductContainer;
