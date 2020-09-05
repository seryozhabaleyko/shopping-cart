import React from 'react';
import { Checkbox, List } from 'antd';

import styled from './InternalStorage.module.scss';
import { useDispatch } from 'react-redux';
import { addFilterByInternalStorage, removeFilterByInternalStorage } from '../../actions/filterBy';

function InternalStorage() {
    const dispatch = useDispatch();

    const handleCheckboxChange = (event) => {
        const { checked, name } = event.target;
        if (checked) {
            dispatch(addFilterByInternalStorage(name));
        } else {
            dispatch(removeFilterByInternalStorage(name));
        }
    };

    return (
        <div className={styled.storage}>
            <List
                dataSource={['32', '64', '128', '256']}
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

export default InternalStorage;
