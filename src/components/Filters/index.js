import React from 'react';

import Manufacturer from './Manufacturer';

import styled from './filters.module.scss';

function Filters() {
    return (
        <div className={styled.filters}>
            Filters
            <Manufacturer />
        </div>
    );
}

export default Filters;
