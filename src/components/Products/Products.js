import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { Select, Typography } from 'antd';

import ProductList from '../ProductList';
import { setOrderBy } from '../../actions/filterBy';
import LoadMore from '../LoadMore';

import './Products.scss';

const { Title } = Typography;

const options = [
    { label: 'Сначала новые', value: 'date-desc' },
    { label: 'Сначала дешевые', value: 'price-asc' },
    { label: 'Сначала дорогие', value: 'price-desc' },
];

function Products() {
    const dispatch = useDispatch();
    const orderBy = useSelector((state) => state.filterBy.orderBy, shallowEqual);

    const handleChangeSelect = (value) => {
        dispatch(setOrderBy(value));
    };

    return (
        <div className="products">
            <div className="products__heading">
                <Title level={4} style={{ margin: 0 }}>
                    Каталог товаров
                </Title>
                <Select style={{ minWidth: 160 }} options={options} value={orderBy} onChange={handleChangeSelect} />
            </div>
            <ProductList />
            <LoadMore />
        </div>
    );
}

export default Products;
