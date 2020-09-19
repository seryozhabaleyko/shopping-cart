import React from 'react';
import { useDispatch } from 'react-redux';
import { List, Checkbox } from 'antd';

import { addFilterByRAM, removeFilterByRAM } from '../../store/filterBy/actions';

import styled from './RAM.module.scss';

function RAM() {
    const dispatch = useDispatch();

    const handleCheckboxChange = (event: any) => {
        const { checked, name } = event.target;
        if (checked) {
            dispatch(addFilterByRAM(name.toLowerCase()));
        } else {
            dispatch(removeFilterByRAM(name.toLowerCase()));
        }
    };

    return (
        <div className={styled.ram}>
            <List
                dataSource={['2', '3', '4', '6', '8', '12']}
                renderItem={(label) => (
                    <List.Item key={label}>
                        <Checkbox name={label} onChange={handleCheckboxChange}>
                            {`${label} ГБ`}
                        </Checkbox>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default RAM;
