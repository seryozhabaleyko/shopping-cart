import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { InputNumber, Slider } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import debounce from 'lodash.debounce';

import { setFilterByPrice } from '../../actions/filterBy';

function Prices({ initialState = [0, 9999] }) {
    const dispatch = useDispatch();
    const [price, setPrice] = useState(initialState);

    const updatePrice = () => {
        dispatch(setFilterByPrice(price));
    };
    const delayedPrice = useCallback(debounce(updatePrice, 1000), [price]);

    useEffect(() => {
        delayedPrice();
        return delayedPrice.cancel;
    }, [price, delayedPrice]);

    const formatter = (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const handleMinPriceChange = (value) => {
        setPrice((prePrice) => [value, prePrice[1]]);
    };

    const handleMaxPriceChange = (value) => {
        setPrice((prePrice) => [prePrice[0], value]);
    };

    const handleRangePriceChange = (value) => {
        setPrice(value);
    };

    return (
        <div className="catalog-filters__price">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <InputNumber
                    defaultValue={0}
                    min={0}
                    max={9999}
                    formatter={formatter}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    value={price[0]}
                    onChange={handleMinPriceChange}
                />
                <MinusOutlined />
                <InputNumber
                    defaultValue={9999}
                    min={0}
                    max={9999}
                    formatter={formatter}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    value={price[1]}
                    onChange={handleMaxPriceChange}
                />
            </div>

            <Slider
                style={{ margin: '1.5rem 0 0 0' }}
                min={0}
                max={9999}
                tipFormatter={formatter}
                range
                value={price}
                onChange={handleRangePriceChange}
            />
        </div>
    );
}

export default Prices;
