import React from 'react';

import { manufacturer } from '../../constants/defaults';
import Checkbox from '../Checkbox';

import styled from './manufacturer.module.scss';

function Manufacturer() {
    const handleCheckboxChange = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        console.log(name);
        console.log(checked);

        if (event.target.checked) {
            // dispatch(addBrandToFilter(name));
        } else {
            // dispatch(removeBrandFromFilter(name));
        }
    };

    return (
        <div className={styled.manufacturer}>
            <div className={styled.heading}>Manufacturer</div>
            <ul className={styled.list}>
                {manufacturer.map((label) => (
                    <li key={label}>
                        <Checkbox name={label} label={label} onChange={handleCheckboxChange} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Manufacturer;
