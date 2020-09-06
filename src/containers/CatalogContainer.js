import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCatalog } from '../actions/catalog';
import { fetchCategories } from '../actions/categories';
import Catalog from '../pages/Catalog';
import useDocumentTitle from '../hooks/useDocumentTitle';

function CatalogContainer() {
    useDocumentTitle('Каталог товаров | Valhalla - Online Store');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatalog({ limit: 8 }));
        dispatch(fetchCategories());
    }, [dispatch]);

    return <Catalog />;
}

export default CatalogContainer;
