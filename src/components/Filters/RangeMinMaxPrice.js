import React from 'react';
import { useDispatch } from 'react-redux';

import { setMinPriceFilter, setMaxPriceFilter } from '../../actions/filterBy';

import styled from './RangeMinMaxPrice.module.scss';

function debounce(f, ms) {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => (isCooldown = false), ms);
    };
}

function RangeMinMaxPrice() {
    const dispatch = useDispatch();

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
                onChange={debounce(
                    (event) => dispatch(setMinPriceFilter(event.target.value)),
                    2000,
                )}
            />
            <input
                type="number"
                name="price-max"
                placeholder="до"
                defaultValue="800"
                min="0"
                max="1000"
                onChange={(event) => dispatch(setMaxPriceFilter(event.target.value))}
            />
        </div>
    );
}

export default RangeMinMaxPrice;
