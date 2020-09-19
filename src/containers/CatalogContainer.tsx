import React, { useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import Catalog from '../pages/Catalog';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { fetchProducts } from '../store/products/actions';
import { getProductsLength } from '../selectors';

function CatalogContainer() {
    useDocumentTitle('Каталог товаров | Valhalla - Online Store');
    const dispatch = useDispatch();
    const productsLength = useSelector(getProductsLength, shallowEqual);

    useEffect(() => {
        if (productsLength === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, productsLength]);

    return <Catalog />;
}

export default CatalogContainer;
