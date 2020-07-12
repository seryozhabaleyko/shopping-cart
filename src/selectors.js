import * as R from 'ramda';
import { createSelector } from 'reselect';

/* const fulterByManufacturer = (state) => state.filterBy.manufacturer;
const phonesItems = (state) => state.catalog.data; */

const filterPhonesByManufacturer = createSelector(
    (state) => state.filterBy.manufacturer,
    (state) => state.catalog.data,
    (filterBy, phones) => {
        const sortBy = (sortType) => {
            return (phones) => {
                switch (sortType) {
                    case 'ASC':
                        return R.sort(R.ascend(R.prop('price')), phones);
                    case 'DESC':
                        return R.sort(R.descend(R.prop('price')), phones);
                    default:
                        return phones;
                }
            };
        };

        const fulterByManufacturer = (filterBy) => {
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

        return R.compose(sortBy('ASC'), fulterByManufacturer(filterBy), R.values)(phones);
    },
);

const catalogIsLoading = (state) => state.catalog.isLoading;
const catalogItems = (state) => state.catalog.data;
const catalogErrorMessage = (state) => state.catalog.errorMessage;

export const getCatalog = createSelector(
    catalogIsLoading,
    filterPhonesByManufacturer,
    catalogErrorMessage,
    (isLoading, items, errorMessage) => ({
        isLoading,
        items,
        errorMessage,
    }),
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
