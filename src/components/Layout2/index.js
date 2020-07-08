import React from 'react';

import Sidebar from '../sidebar';

const Layout = ({ children }) => (
	<main className="main">
		<Sidebar />
		<section className="content">{children}</section>
	</main>
);

export default Layout;
