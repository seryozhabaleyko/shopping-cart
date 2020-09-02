import React from 'react';
import { useDispatch } from 'react-redux';
import { Select } from 'antd';

import ProductList from '../ProductList';
import { sortBy } from '../../actions/sortBy';
import LoadMore from '../LoadMore';

import styled from './products.module.scss';

const options = [
    { label: 'Сначала новые', value: 'date-descending' },
    { label: 'Сначала дешевые', value: 'price-ascending' },
    { label: 'Сначала дорогие', value: 'price-descending' },
];

function Products() {
    const dispatch = useDispatch();

    const handleChangeSelect = (value) => {
        switch (value) {
            case 'date-descending':
                return dispatch(sortBy({ key: 'date', type: 'ASC' }));
            case 'price-ascending':
                return dispatch(sortBy({ key: 'price', type: 'ASC' }));
            case 'price-descending':
                return dispatch(sortBy({ key: 'price', type: 'DESC' }));
            default:
                return options[0].value;
        }
    };

    return (
        <div className={styled.products}>
            <div className={styled.heading}>
                <h2>Каталог товаров</h2>
                <Select
                    style={{ minWidth: 160 }}
                    options={options}
                    defaultValue={options[0].value}
                    onChange={handleChangeSelect}
                />
            </div>
            <ProductList />
            <LoadMore />
        </div>
    );
}

export default Products;
