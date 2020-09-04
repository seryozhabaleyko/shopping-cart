import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCatalog } from '../actions/catalog';
import { fetchCategories } from '../actions/categories';
import Catalog from '../pages/Catalog';

function CatalogContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatalog({ limit: 8 }));
        dispatch(fetchCategories());
    }, [dispatch]);

    return <Catalog />;
}

export default CatalogContainer;
