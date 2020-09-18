import { combineReducers } from 'redux';

import productReducer from './product/reducers';
import productsReducer from './products/reducers';
import cartReducer from './cart/reducers';
import filterByReducer from './filterBy/reducers';

const rootReducer = combineReducers({
    product: productReducer,
    catalog: productsReducer,
    cart: cartReducer,
    filterBy: filterByReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
