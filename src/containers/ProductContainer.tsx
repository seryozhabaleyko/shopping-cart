import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Product from '../pages/Product';
import { fetchProductById } from '../store/product/actions';

function ProductContainer() {
    const dispatch = useDispatch();
    const { id }: { id: string } = useParams();

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    return <Product />;
}

export default ProductContainer;
