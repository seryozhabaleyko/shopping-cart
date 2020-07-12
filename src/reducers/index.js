import { combineReducers } from 'redux';

import catalog from './catalog';
import product from './product';
import cart from './cart';
import filterBy from './filterBy';
import sortBy from './sortBy';

import phonePage from './phonePage';
import phonesPage from './phonesPage';
import categories from './categories';

export default combineReducers({
    catalog,
    product,
    cart,
    filterBy,
    sortBy,
    phonePage,
    phonesPage,
    categories,
});
