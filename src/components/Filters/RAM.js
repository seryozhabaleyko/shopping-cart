import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'antd';

import { addRAMToFilter, removeRAMFromFilter } from '../../actions/filterBy';

import styled from './RAM.module.scss';

function RAM() {
    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        const { checked, name } = event.target;
        if (checked) {
            dispatch(addRAMToFilter(name));
        } else {
            dispatch(removeRAMFromFilter(name));
        }
    };

    return (
        <div className={styled.ram}>
            <div className={styled.heading}>RAM</div>
            {['2', '3', '4', '6', '8', '12'].map((ram) => (
                <Checkbox key={ram} name={ram} onChange={handleCheckboxChange}>
                    {`${ram} GB`}
                </Checkbox>
            ))}
        </div>
    );
}

export default RAM;
