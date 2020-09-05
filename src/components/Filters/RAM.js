import React from 'react';
import { useDispatch } from 'react-redux';
import { List, Checkbox } from 'antd';

import { addFilterByRAM, removeFilterByRAM } from '../../actions/filterBy';

import styled from './RAM.module.scss';

function RAM() {
    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        const { checked, name } = event.target;
        if (checked) {
            dispatch(addFilterByRAM(name));
        } else {
            dispatch(removeFilterByRAM(name));
        }
    };

    return (
        <div className={styled.ram}>
            <List
                dataSource={['2', '3', '4', '6', '8', '12']}
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

export default RAM;
