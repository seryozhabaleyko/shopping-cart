import React from 'react';

import Checkbox from '../Checkbox';

import styled from './InternalStorage.module.scss';

function InternalStorage() {
    return (
        <div className={styled.storage}>
            <div className={styled.heading}>Internal storage</div>
            <div className={styled.list}>
                {['32', '64', '128', '256'].map((label) => (
                    <Checkbox key={label} label={`${label} GB`} />
                ))}
            </div>
        </div>
    );
}

export default InternalStorage;