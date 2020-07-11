import React from 'react';

import styled from './spinner.module.scss';

function Spinner() {
    return (
        <div className={styled.spinner}>
            <div className={styled.cube1}></div>
            <div className={styled.cube2}></div>
        </div>
    );
}

export default Spinner;
