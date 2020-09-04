import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import classNames from 'classnames';

import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { getProductById } from '../../selectors';
import { addToCart } from '../../actions/cart';
import Cart from '../../components/Cart';
import Layout from '../../components/Layout';

import styled from './product.module.scss';
import './style.scss';

function Product() {
    const dispatch = useDispatch();
    const { loading, data, error } = useShallowEqualSelector(getProductById);

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    /* const renderFields = () => {
        const columnField = R.compose(
            R.toPairs,
            R.pick(['cpu', 'camera', 'size', 'weight', 'display', 'battery', 'memory']),
        )(phone);

        return columnField.map(([key, value]) => (
            <div className="details-column" key={key}>
                <div className="details-title">
                    <p>{key}:</p>
                </div>
                <div className="details-info">{value}</div>
            </div>
        ));
    }; */

    return (
        <>
            <Layout breakpoint="xl">
                {/* <div className={styled.product}>
                    <div className={styled.single}>
                        <figure className={classNames('figure', 'figure-img', styled.image)}>
                            <img src={photoUrl} alt={title} />
                        </figure>
                        <div className={styled.info}>info</div>
                    </div>
                </div> */}
            </Layout>

            <main className="container">
                <aside className="sidebar">sidebar</aside>
                <section className="content">content</section>
            </main>
        </>
    );
}

export default Product;
