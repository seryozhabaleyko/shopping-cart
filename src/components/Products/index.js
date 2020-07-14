import React from 'react';
import { useDispatch } from 'react-redux';
import { Select, IconButton } from 'evergreen-ui';

import ProductList from '../ProductList';
import { sortBy } from '../../actions/sortBy';

import styled from './products.module.scss';

function Products() {
    const dispatch = useDispatch();

    const handleChangeSelect = (event) => {
        const { value } = event.target;
        if (value === 'date') {
            dispatch(sortBy({ key: 'date', type: 'ASC' }));
        }
        if (value === 'priceAscending') {
            dispatch(sortBy({ key: 'price', type: 'ASC' }));
        }
        if (value === 'priceDescending') {
            dispatch(sortBy({ key: 'price', type: 'DESC' }));
        }
    };

    return (
        <div className={styled.products}>
            <div className={styled.heading}>
                <div style={{ display: 'flex' }}>
                    <IconButton icon="cross" height={40} marginRight={12} />
                    <IconButton icon="notifications" height={40} />
                </div>
                <div>
                    <Select
                        width={240}
                        height={40}
                        defaultValue="priceAscending"
                        onChange={handleChangeSelect}
                    >
                        <option value="date">Сначала новые</option>
                        <option value="priceAscending">Сначала дешевые</option>
                        <option value="priceDescending">Сначала дорогие</option>
                    </Select>
                </div>
            </div>
            <ProductList />
        </div>
    );
}

export default Products;
