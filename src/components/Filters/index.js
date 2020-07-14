import React from 'react';

import Manufacturer from './Manufacturer';
import RangeMinMaxPrice from './RangeMinMaxPrice';
import RAM from './RAM';
import InternalStorage from './InternalStorage';

import styled from './filters.module.scss';

function Filters() {
    return (
        <div className={styled.filters}>
            Filters
            <Manufacturer />
            <RangeMinMaxPrice />
            <RAM />
            <InternalStorage />
        </div>
    );
}

export default Filters;
