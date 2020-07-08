import React from 'react';

import Navbar from '../Navbar';

import styled from './header.module.scss';

function Header() {
	return (
		<header className={styled.header}>
			<Navbar />
		</header>
	);
}

export default Header;
