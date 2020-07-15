import React from 'react';

import Layout from '../../components/Layout';
import Products from '../../components/Products';
import Filters from '../../components/Filters';

import styled from './catalog.module.scss';

function Catalog() {
    console.log('Catalog');

    // const shortDescription = `${R.take(60, phone.description)}...`;

    return (
        <Layout>
            <div className={styled.catalog}>
                <div className={styled.products}>
                    <Filters />
                    <Products />
                </div>
            </div>
        </Layout>
    );
}

export default Catalog;
