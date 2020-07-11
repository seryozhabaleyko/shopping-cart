import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../pages/Product';
import { fetchProductById } from '../actions/product';
import { addToCart } from '../actions/cart';

function ProductContainer({ fetchProductById, addToCart, match }) {
    const { id } = match.params;

    useEffect(() => {
        fetchProductById(id);
    }, [fetchProductById, id]);

    return <Product addToCart={addToCart} />;
}

ProductContainer.propTypes = {
    fetchProductById: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    }),
};

const mapDispatchToProps = {
    fetchProductById,
    addToCart,
};

export default connect(null, mapDispatchToProps)(ProductContainer);
