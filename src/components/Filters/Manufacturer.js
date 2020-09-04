import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, List } from 'antd';

import useQueryState from '../../hooks/useQueryState';
import { manufacturer } from '../../constants/defaults';
import { addFilterByBrand, removeFilterByBrand } from '../../actions/filterBy';

import './Manufacturer.scss';

function Manufacturer() {
    const { brand, setBrand } = useQueryState('brand', null);
    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        const { checked, name } = event.target;
        if (checked) {
            dispatch(addFilterByBrand(name));
        } else {
            dispatch(removeFilterByBrand(name));
        }
    };

    return (
        <div className="manufacturer">
            <List
                dataSource={manufacturer}
                renderItem={(label) => (
                    <List.Item key={label}>
                        <Checkbox name={label} onChange={handleCheckboxChange}>
                            {label}
                        </Checkbox>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Manufacturer;
