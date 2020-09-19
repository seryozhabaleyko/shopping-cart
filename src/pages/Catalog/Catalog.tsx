import React from 'react';

import Layout from '../../components/Layout';
import Products from '../../components/Products';
import Filters from '../../components/Filters';

import './Catalog.scss';

function Catalog() {
    return (
        <Layout>
            <div className="catalog">
                <div className="catalog__products">
                    <Filters />
                    <Products />
                </div>
            </div>
        </Layout>
    );
}

export default Catalog;
