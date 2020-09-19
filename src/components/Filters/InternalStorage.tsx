import React from 'react';
import { Checkbox, List } from 'antd';

import styled from './InternalStorage.module.scss';
import { useDispatch } from 'react-redux';
import { addFilterByInternalStorage, removeFilterByInternalStorage } from '../../store/filterBy/actions';

function InternalStorage() {
    const dispatch = useDispatch();

    const handleCheckboxChange = (event: any) => {
        const { checked, name } = event.target;
        if (checked) {
            dispatch(addFilterByInternalStorage(name.toLowerCase()));
        } else {
            dispatch(removeFilterByInternalStorage(name.toLowerCase()));
        }
    };

    return (
        <div className={styled.storage}>
            <List
                dataSource={['32', '64', '128', '256']}
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

export default InternalStorage;
