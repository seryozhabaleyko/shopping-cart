import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as R from 'ramda';
import classNames from 'classnames';

import { getProductById } from '../../selectors';
import { addToCart } from '../../actions/cart';
import Layout from '../../components/Layout';

import './Product.scss';

function Product() {
    const dispatch = useDispatch();

    const { loading, product, error } = useSelector(getProductById, shallowEqual);

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    const { title = '', photoUrl = '' } = product;

    return (
        <Layout breakpoint="xl">
            <div className="product">
                <header className="product__heading">
                    <h1 className="product__title">{title}</h1>
                </header>

                <div className="product__grid">
                    <div className="product__image">
                        <img src={photoUrl} alt={title} />
                    </div>

                    <div className="product__body">
                        <h4>Основные характеристики</h4>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Product;
