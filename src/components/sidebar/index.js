import React from 'react';

import Cart from '../Cart';
import Search from '../search';
import Categories from '../categories';

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<Cart />
			<Search />
			<Categories />
		</aside>
	);
};

export default Sidebar;
