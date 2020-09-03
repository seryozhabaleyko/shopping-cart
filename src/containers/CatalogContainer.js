import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCatalog } from '../actions/catalog';
import { fetchCategories } from '../actions/categories';
import Catalog from '../pages/Catalog';

function CatalogContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatalog());
        dispatch(fetchCategories());
    }, [dispatch, fetchCatalog, fetchCategories]);

    return <Catalog />;
}

export default CatalogContainer;
