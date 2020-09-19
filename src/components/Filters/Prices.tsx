import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { InputNumber, Slider } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import debounce from 'lodash.debounce';

import { setFilterByPrice } from '../../store/filterBy/actions';

function Prices() {
    const dispatch = useDispatch();
    const [price, setPrice] = useState<any>([0, 9999]);

    const updatePrice = () => {
        dispatch(setFilterByPrice(price));
    };
    const delayedPrice = useCallback(debounce(updatePrice, 1000), [price]);

    useEffect(() => {
        delayedPrice();
        return delayedPrice.cancel;
    }, [price, delayedPrice]);

    const formatter = (value: string | number | undefined) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const handleMinPriceChange = (value: any) => {
        setPrice((prePrice: number[]) => [value, prePrice[1]]);
    };

    const handleMaxPriceChange = (value: any) => {
        setPrice((prePrice: number[]) => [prePrice[0], value]);
    };

    const handleRangePriceChange = (value: any) => {
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
                    parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                    value={price[0]}
                    onChange={handleMinPriceChange}
                />
                <MinusOutlined />
                <InputNumber
                    defaultValue={9999}
                    min={0}
                    max={9999}
                    formatter={formatter}
                    parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
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
