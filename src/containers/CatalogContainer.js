import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCatalog } from '../actions/catalog';
import { fetchCategories } from '../actions/categories';
import Catalog from '../pages/Catalog';

function CatalogContainer({ fetchCatalog, fetchCategories }) {
    useEffect(() => {
        fetchCatalog();
        fetchCategories();
    }, [fetchCatalog, fetchCategories]);

    console.log('CatalogContainer');

    return <Catalog catalog={'catalog'} />;
}

CatalogContainer.propTypes = {
    fetchCatalog: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    fetchCatalog,
    fetchCategories,
};

export default connect(null, mapDispatchToProps)(CatalogContainer);
