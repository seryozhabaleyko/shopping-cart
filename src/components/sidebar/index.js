import React from 'react';

import BasketCart from '../basketCart';
import Search from '../search';
import Categories from '../categories';

const Sidebar = () => {

    return (
        <aside className='sidebar'>
            <BasketCart/>
            <Search/>
            <Categories/>
        </aside>
    );
};

export default Sidebar;