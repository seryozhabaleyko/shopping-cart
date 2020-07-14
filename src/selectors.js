import * as R from 'ramda';
import { createSelector } from 'reselect';

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
                    (phone) =>
                        R.prop('price', phone) >= minPrice && R.prop('price', phone) <= maxPrice,
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
                                R.find((filter) =>
                                    R.equals(
                                        R.toLower(R.prop('manufacturer', item)),
                                        R.toLower(filter),
                                    ),
                                )(filterBy),
                            phones,
                        ),
                    ),
                    R.always(phones),
                )();
        };

        return R.compose(
            sortByCase(R.prop('key', sortBy), R.prop('type', sortBy)),
            filterByRAM(R.prop('ram', filterBy)),
            filterByPriceCase(
                R.prop('min', R.prop('price', filterBy)),
                R.prop('max', R.prop('price', filterBy)),
            ),
            filterByManufacturer(R.prop('manufacturer', filterBy)),
            R.values,
        )(phones);
    },
);

const catalogIsLoading = (state) => state.catalog.isLoading;
const catalogError = (state) => state.catalog.error;

export const getCatalog = createSelector(
    catalogIsLoading,
    filterAndSortPhonesBy,
    catalogError,
    (isLoading, products, error) => {
        const hasErrorMessage =
            R.not(isLoading) && R.not(R.length(products)) && R.not(error)
                ? {
                      ...error,
                      message: 'Упс! У нас нет таких товаров, попробуйте изменить условия поиска.',
                  }
                : error;

        return {
            isLoading,
            products,
            error: hasErrorMessage,
        };
    },
);

const productIsLoading = (state) => state.product.isLoading;
const productData = (state) => state.product.data;
const productErrorMessage = (state) => state.product.error;

export const getProductById = createSelector(
    productIsLoading,
    productData,
    productErrorMessage,
    (isLoading, data, error) => ({
        isLoading,
        data,
        error,
    }),
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

    return totalPrice;
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
