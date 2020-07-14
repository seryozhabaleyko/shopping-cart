import React from 'react';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

import { setMinPriceFilter, setMaxPriceFilter } from '../../actions/filterBy';

import styled from './RangeMinMaxPrice.module.scss';

function RangeMinMaxPrice() {
    const dispatch = useDispatch();

    const [debouncedCallbackMin] = useDebouncedCallback((value) => {
        dispatch(setMinPriceFilter(value));
    }, 500);

    const [debouncedCallbackMax] = useDebouncedCallback((value) => {
        dispatch(setMaxPriceFilter(value));
    }, 500);

    return (
        <div className={styled.range}>
            <div className={styled.heading}>Range</div>
            <input
                type="number"
                name="price-min"
                placeholder="from"
                min="0"
                max="Infinity"
                onChange={(e) => debouncedCallbackMin(e.target.value)}
            />
            <input
                type="number"
                name="price-max"
                placeholder="to"
                min="0"
                max="Infinity"
                onChange={(e) => debouncedCallbackMax(e.target.value)}
            />
        </div>
    );
}

export default RangeMinMaxPrice;
