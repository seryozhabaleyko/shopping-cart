import React from 'react';

import { ReactComponent as LogoI } from './logo.svg';

import styled from './Logo.module.scss';

function Logo() {
    return (
        <a href="/" className={styled.logo}>
            <LogoI className={styled.image} width={24} height={24} />
            <span className={styled.text}>Valhalla</span>
        </a>
    );
}

export default Logo;
