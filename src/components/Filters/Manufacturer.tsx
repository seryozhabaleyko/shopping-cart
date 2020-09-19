import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, List } from 'antd';

import { manufacturer } from '../../constants/defaults';
import { addFilterByBrand, removeFilterByBrand } from '../../store/filterBy/actions';

import './Manufacturer.scss';

function Manufacturer() {
    const dispatch = useDispatch();

    const handleCheckboxChange = (event: any) => {
        const { checked, name } = event.target;
        if (checked) {
            dispatch(addFilterByBrand(name.toLowerCase()));
        } else {
            dispatch(removeFilterByBrand(name.toLowerCase()));
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
