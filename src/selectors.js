import * as R from 'ramda';
import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;
const numberItemsCartSelector = (state) => state.cart.length;

export const getCart = createSelector(cartSelector, (cart) => cart);
export const getNumberItemsCart = createSelector(numberItemsCartSelector, (numberItemsCart) => numberItemsCart);
export const getTotalPrice = createSelector(cartSelector, (cart) => {
    let total = 0;

    if (cart.length !== 0) {
        const result = cart.map((product) => product.price * product.quantity).reduce((a, b) => a + b);
        total = result.toFixed(2);
    }

    return Number(total).toLocaleString();
});

const productLoading = (state) => state.product.isLoading;
const productItems = (state) => state.product.data;
const productError = (state) => state.product.error;

export const getProductById = createSelector(productLoading, productItems, productError, (loading, product, error) => ({
    loading,
    product,
    error,
}));

const filterAndSortPhonesBy = createSelector(
    (state) => state.filterBy,
    (state) => state.catalog.sortBy,
    (state) => state.catalog.data,
    (filterBy, sortBy, phones) => {
        const sortByCase = (sortKey, sortType) => (phones) => {
            switch (sortType) {
                case 'ASC':
                    return R.sort(R.ascend(R.prop(sortKey)), phones);
                case 'DESC':
                    return R.sort(R.descend(R.prop(sortKey)), phones);
                default:
                    return phones;
            }
        };

        const filterByRAM = (filterBy) => (phones) => {
            if (R.length(filterBy)) {
                return R.filter(
                    (phone) => R.find((filter) => R.equals(R.prop('ram', phone), filter), filterBy),
                    phones,
                );
            }
            return phones;
        };

        const filterByPriceCase = (minPrice, maxPrice) => (phones) => {
            if (minPrice && maxPrice) {
                return R.filter(
                    (phone) => R.prop('price', phone) >= minPrice && R.prop('price', phone) <= maxPrice,
                    phones,
                );
            }
            if (minPrice) {
                return R.filter((phone) => R.prop('price', phone) >= minPrice, phones);
            }
            if (maxPrice) {
                return R.filter((phone) => R.prop('price', phone) <= maxPrice, phones);
            }
            return phones;
        };

        const filterByManufacturer = (filterBy) => {
            return (phones) =>
                R.ifElse(
                    R.always(R.length(filterBy)),
                    R.always(
                        R.filter(
                            (item) =>
                                R.find((filter) => R.equals(R.toLower(R.prop('brand', item)), R.toLower(filter)))(
                                    filterBy,
                                ),
                            phones,
                        ),
                    ),
                    R.always(phones),
                )();
        };

        return R.compose(
            sortByCase(R.prop('key', sortBy), R.prop('type', sortBy)),
            filterByRAM(R.prop('ram', filterBy)),
            filterByPriceCase(R.prop('min', R.prop('price', filterBy)), R.prop('max', R.prop('price', filterBy))),
            filterByManufacturer(R.prop('brand', filterBy)),
            R.values,
        )(phones);
    },
);

const catalogLoadingSelector = (state) => state.catalog.loading;
const catalogItemsSelector = (state) => state.catalog.data;
const catalogErrorSelector = (state) => state.catalog.error;
const catalogOrderBySelector = (state) => state.filterBy.orderBy;
const catalogFilterByBrandSelector = (state) => state.filterBy.brand;
const catalogFilterByPriceSelector = (state) => state.filterBy.price;
const catalogFilterByRAMSelector = (state) => state.filterBy.ram;
const catalogFilterByInternalStorageSelector = (state) => state.filterBy.internalStorage;

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

            return matchBrand && matchRAM && matchInternalStorage;
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
    (loading, products, error) => {
        const hasErrorMessage =
            R.not(loading) && R.not(R.length(products)) && R.not(error)
                ? {
                      ...error,
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

const getActionCategoryId = (props) => R.path(['match', 'params', 'id'], props);
export const getPhoneById = (state, id) => R.prop(id, state.catalog.data);

export function getPhones(state, props) {
    const activeCategoryId = getActionCategoryId(props);

    const applySearch = (item) => R.contains(state.phonesPage.search, R.prop('name', item));

    const applyCategory = (item) => R.equals(activeCategoryId, R.prop('categoryId', item));

    const phones = R.compose(
        R.filter(applySearch),
        R.when(R.always(activeCategoryId), R.filter(applyCategory)),
        R.map((id) => getPhoneById(state, id)),
    )(state.phonesPage.ids);

    return phones;
}

export const getRenderedPhonesLength = (state) => R.length(state.phonesPage.ids);

export const getNumberOfProducts = (state) => R.length(state.cart);

export const getTheTotalCostOfTheBasket = (state) => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map((id) => getPhoneById(state, id)),
    )(state.cart);

    return totalPrice.toLocaleString();
};

export const getCategories = (state) => R.values(state.categories);

export const getBasketPhonesWithCount = (state) => {
    const phoneCount = (id) =>
        R.compose(
            R.length,
            R.filter((basketId) => R.equals(id, basketId)),
        )(state.cart);
    const phoneWithCount = (phone) => R.assoc('count', phoneCount(phone.id), phone);
    const uniqueIds = R.uniq(state.cart);
    const phones = R.compose(
        R.map(phoneWithCount),
        R.map((id) => getPhoneById(state, id)),
    )(uniqueIds);

    return phones;
};
