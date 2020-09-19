import { createSelector } from 'reselect';
import { RootState } from './store/rootReducer';

export const getCart = createSelector(
    (state: RootState) => state.cart,
    (cart) => cart,
);

export const getNumberCartItems = createSelector(getCart, (cart) => cart.length);

export const getTotalPrice = createSelector(getCart, (cart) => {
    let total = 0;

    if (cart.length !== 0) {
        total = cart.map((product) => product.price * product.quantity).reduce((a, b) => a + b);
    }

    return total;
});

export const getProduct = createSelector(
    (state: RootState) => state.product.loading,
    (state: RootState) => state.product.data,
    (state: RootState) => state.product.error,
    (loading, product, error) => ({
        loading,
        product,
        error,
    }),
);

const catalogLoadingSelector = (state: RootState) => state.catalog.loading;
const catalogItemsSelector = (state: RootState) => state.catalog.data;
const catalogErrorSelector = (state: RootState) => state.catalog.error;
const catalogOrderBySelector = (state: RootState) => state.filterBy.orderBy;
const catalogFilterByBrandSelector = (state: RootState) => state.filterBy.brand;
const catalogFilterByPriceSelector = (state: RootState) => state.filterBy.price;
const catalogFilterByRAMSelector = (state: RootState) => state.filterBy.ram;
const catalogFilterByInternalStorageSelector = (state: RootState) => state.filterBy.internalStorage;

const catalogItemsFilterBy = createSelector(
    catalogItemsSelector,
    catalogFilterByBrandSelector,
    catalogFilterByPriceSelector,
    catalogFilterByRAMSelector,
    catalogFilterByInternalStorageSelector,
    (items, filterByBrand, filterByPrice, filterByRAM, filterByInternalStorage) => {
        if (!items || items.length === 0) return [];

        return items.filter((item) => {
            const matchBrand = filterByBrand.length !== 0 ? filterByBrand.includes(item.brand) : true;
            const matchRAM = filterByRAM.length !== 0 ? filterByRAM.includes(item.ram) : true;
            const matchInternalStorage =
                filterByInternalStorage.length !== 0 ? filterByInternalStorage.includes(item.internalStorage) : true;
            const matchPrice = item.price >= filterByPrice[0] && item.price <= filterByPrice[1];

            return matchBrand && matchPrice && matchRAM && matchInternalStorage;
        });
    },
);

const catalogItemsFilterByAndOrderBy = createSelector(
    catalogItemsFilterBy,
    catalogOrderBySelector,
    (items, orderBy) => {
        return items.sort((a, b) => {
            switch (orderBy) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                default:
                    return b.createdAt.toDate() - a.createdAt.toDate();
            }
        });
    },
);

export const getCatalog = createSelector(
    catalogLoadingSelector,
    catalogItemsFilterByAndOrderBy,
    catalogErrorSelector,
    (loading, products, error: any) => {
        const hasErrorMessage =
            !loading && !products.length && !error
                ? {
                      ...error,
                      name: 'Фильтр',
                      message: 'Упс! У нас нет таких товаров, попробуйте изменить условия поиска.',
                  }
                : error;

        return {
            loading,
            products,
            error: hasErrorMessage,
        };
    },
);

export const getProductsLength = (state: RootState) => state.catalog.data.length;
export const getProductsTotal = (state: RootState) => state.catalog.total;
