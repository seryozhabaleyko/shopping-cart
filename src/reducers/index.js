import { combineReducers } from 'redux';

import catalog from './catalog';
import product from './product';
import cart from './cart';
import filterBy from './filterBy';

export default combineReducers({
    catalog,
    product,
    cart,
    filterBy,
});
