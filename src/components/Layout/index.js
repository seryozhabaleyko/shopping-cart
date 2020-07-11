import React from 'react';

import { isContainer } from '../../helpers';

import styled from './layout.module.scss';

function Layout({ children, breakpoint = '' }) {
    return (
        <main className={styled.main}>
            <div className={isContainer(breakpoint)}>{children}</div>
        </main>
    );
}

export default Layout;
