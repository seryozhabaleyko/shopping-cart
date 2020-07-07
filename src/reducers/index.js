import { combineReducers } from 'redux';

import phones from './phones';
import phonePage from './phonePage';
import phonesPage from './phonesPage';
import basket from './basket';
import categories from './categories';

const rootReducers = combineReducers({
    phones,
    phonePage,
    phonesPage,
    basket,
    categories,
});

export default rootReducers;