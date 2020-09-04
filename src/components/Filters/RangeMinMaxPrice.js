import React from 'react';
import { useDispatch } from 'react-redux';
import { InputNumber, Slider } from 'antd';
import { useDebouncedCallback } from 'use-debounce';

import useQueryState from '../../hooks/useQueryState';
import { setMinPriceFilter, setMaxPriceFilter } from '../../actions/filterBy';

import styled from './RangeMinMaxPrice.module.scss';

function RangeMinMaxPrice() {
    const [priceMin, setPriceMin] = useQueryState('priceMin', 0);
    const [priceMax, setPriceMax] = useQueryState('priceMax', 9999);
    const dispatch = useDispatch();

    const [debouncedCallbackMin] = useDebouncedCallback((value) => {
        dispatch(setMinPriceFilter(value));
    }, 500);

    const [debouncedCallbackMax] = useDebouncedCallback((value) => {
        dispatch(setMaxPriceFilter(value));
    }, 500);

    const handlePriceMinChange = (value) => {
        setPriceMin(value);
    };

    const handlePriceMaxChange = (value) => {
        setPriceMax(value);
    };

    return (
        <div className={styled.range}>
            <InputNumber
                defaultValue={0}
                min={0}
                max={9999}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                onChange={handlePriceMinChange}
            />
            <InputNumber
                defaultValue={9999}
                min={0}
                max={9999}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                onChange={handlePriceMaxChange}
            />
            <Slider range defaultValue={[0, 9999]} onChange={(a) => console.log(a)} />
            {/* <input
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
            /> */}
        </div>
    );
}

export default RangeMinMaxPrice;
