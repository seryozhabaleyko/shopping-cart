import React from 'react';

import { isContainer } from '../../helpers';

import styled from './layout.module.scss';

interface LayoutProps {
    children: React.ReactNode;
    breakpoint?: string;
}

function Layout({ children, breakpoint = '' }: LayoutProps) {
    return (
        <main className={styled.main}>
            <div className={isContainer(breakpoint)}>{children}</div>
        </main>
    );
}

export default Layout;
