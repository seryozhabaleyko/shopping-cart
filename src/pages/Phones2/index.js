import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import useActions from '../../hooks/useActions';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { fetchPhones, loadMorePhones } from '../../actions/phones';
import { addPhoneToBasket } from '../../actions/basket';
import { fetchCategories } from '../../actions/categories';
import { getPhones } from '../../selectors';
import Layout from '../../components/layout';

import './style.scss';

const Phones = (props) => {
    const [
        fetchPhonesActionDispatch,
        loadMorePhonesActionDispatch,
        addPhoneToBasketActionDispatch,
        fetchCategoriesActionDispatch
    ] = useActions([fetchPhones, loadMorePhones, addPhoneToBasket, fetchCategories]);

    useEffect(() => {
        fetchPhonesActionDispatch();
        fetchCategoriesActionDispatch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const renderPhone = (phone, index) => {
        const shortDescription = `${R.take(60, phone.description)}...`;

        return (
            <article className='book' key={index}>
                <img className='book-img' src={phone.image} alt={phone.name} />
                <section className='book-body'>
                    <div>
                        <h4 className='book-title'>
                            <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                        </h4>
                        <span className='book-price'>${phone.price}</span>
                    </div>
                    <p className='book-description'>{shortDescription}</p>
                    <div>
                        <button
                            className='btn btn-primary'
                            onClick={() => addPhoneToBasketActionDispatch(phone.id)}
                        >Buy now!</button>
                        <Link to={`/phone/${phone.id}`} className='btn btn-default'>
                            More info
                        </Link>
                    </div>
                </section>
            </article>
        );
    };

    const phones = useShallowEqualSelector((state) => getPhones(state, props));

    return (
        <Layout >
            <div className='books'>
                {phones.map((phone, index) => renderPhone(phone, index))}
            </div>
            <div className='pagination'>
                <button
                    onClick={loadMorePhonesActionDispatch}
                    className='btn btn-primary'
                >Load More</button>
            </div>
        </Layout>
    );
};

export default Phones;