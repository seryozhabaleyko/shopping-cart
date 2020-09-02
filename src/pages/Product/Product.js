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
    const { isLoading, data, error } = useShallowEqualSelector(getProductById);

    if (isLoading || (data.length === 0 && !error)) {
        return null;
    }

    if (error) {
        return null;
    }

    const phone = data || [];

    const renderFields = () => {
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
    };

    const { name, image } = data;

    return (
        <>
            <Layout breakpoint="xl">
                <div className={styled.product}>
                    <div className={styled.single}>
                        <figure className={classNames('figure', 'figure-img', styled.image)}>
                            <img src={image} alt={name} />
                        </figure>
                        <div className={styled.info}>info</div>
                    </div>
                </div>
            </Layout>

            <main className="container">
                <aside className="sidebar">
                    {phone && (
                        <Fragment>
                            <p>Quick shop</p>
                            <Cart />
                            <div>
                                <h1>{phone.name}</h1>
                                <h2>{phone.price}</h2>
                            </div>
                            <Link to="/phones" className="btn btn-primary">
                                Back to store
                            </Link>
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => dispatch(addToCart(phone.id))}
                            >
                                Add to cart
                            </button>
                        </Fragment>
                    )}
                </aside>
                <section className="content">
                    {phone && (
                        <article id="phone">
                            <section>
                                <img className="phone-img" src={phone.image} alt={phone.name} />
                                <div className="phone-details">{renderFields()}</div>
                            </section>
                            <h4>{phone.name}</h4>
                            <span>${phone.price}</span>
                            <p>{phone.description}</p>
                        </article>
                    )}
                </section>
            </main>
        </>
    );
}

export default Product;
