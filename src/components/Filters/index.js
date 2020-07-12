import React from 'react';

import Manufacturer from './Manufacturer';
import RangeMinMaxPrice from './RangeMinMaxPrice';

import styled from './filters.module.scss';

function Filters() {
    return (
        <div className={styled.filters}>
            Filters
            <Manufacturer />
            <RangeMinMaxPrice />
        </div>
    );
}

export default Filters;
