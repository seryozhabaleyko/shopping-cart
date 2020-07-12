import React from 'react';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

import { setMinPriceFilter, setMaxPriceFilter } from '../../actions/filterBy';

import styled from './RangeMinMaxPrice.module.scss';

function RangeMinMaxPrice() {
    const dispatch = useDispatch();

    const [debouncedCallback1] = useDebouncedCallback((value) => {
        dispatch(setMinPriceFilter(value));
    }, 500);

    const [debouncedCallback2] = useDebouncedCallback((value) => {
        dispatch(setMaxPriceFilter(value));
    }, 500);

    return (
        <div className={styled.range}>
            <div className={styled.heading}>Range</div>
            <input
                type="number"
                name="price-min"
                placeholder="от"
                defaultValue="200"
                min="0"
                max="1000"
                onChange={(e) => debouncedCallback1(e.target.value)}
            />
            <input
                type="number"
                name="price-max"
                placeholder="до"
                defaultValue="800"
                min="0"
                max="1000"
                onChange={(e) => debouncedCallback2(e.target.value)}
            />
        </div>
    );
}

export default RangeMinMaxPrice;
