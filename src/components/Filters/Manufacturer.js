import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'antd';

import { manufacturer } from '../../constants/defaults';
import { addManufacturerToFilter, removeManufacturerFromFilter } from '../../actions/filterBy';

import styled from './manufacturer.module.scss';

function Manufacturer() {
    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        const { checked, name } = event.target;
        if (checked) {
            dispatch(addManufacturerToFilter(name));
        } else {
            dispatch(removeManufacturerFromFilter(name));
        }
    };

    return (
        <div className={styled.manufacturer}>
            <div className={styled.heading}>Manufacturer</div>
            <ul className={styled.list}>
                {manufacturer.map((label) => (
                    <li key={label}>
                        <Checkbox name={label} onChange={handleCheckboxChange}>
                            {label}
                        </Checkbox>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Manufacturer;
