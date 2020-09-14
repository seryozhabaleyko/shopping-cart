import React, { useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import { fetchProducts } from '../actions/catalog';
import Catalog from '../pages/Catalog';
import useDocumentTitle from '../hooks/useDocumentTitle';

function CatalogContainer() {
    useDocumentTitle('Каталог товаров | Valhalla - Online Store');
    const dispatch = useDispatch();
    const productsLength = useSelector((state) => state.catalog.data.length, shallowEqual);

    useEffect(() => {
        if (productsLength === 0) {
            dispatch(fetchProducts({ limit: 8 }));
        }
    }, [dispatch, productsLength]);

    return <Catalog />;
}

export default CatalogContainer;
