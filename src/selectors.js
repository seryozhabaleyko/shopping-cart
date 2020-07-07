import * as R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);

const getActionCategoryId = (props) => R.path(['match', 'params', 'id'], props);

export const getPhones = (state, props) => {

    const activeCategoryId = getActionCategoryId(props);

    const applySearch = (item) => R.contains(
        state.phonesPage.search,
        R.prop('name', item),
    );

    const applyCategory = (item) => R.equals(
        activeCategoryId,
        R.prop('categoryId', item),
    );

    const phones = R.compose(
        R.filter(applySearch),
        R.when(R.always(activeCategoryId), R.filter(applyCategory)),
        R.map((id) => getPhoneById(state, id)),
    )(state.phonesPage.ids);

    return phones;
};

export const getRenderedPhonesLength = (state) => R.length(state.phonesPage.ids);

export const getTotalBasketCount = (state) => R.length(state.basket);

export const getTotalBasketPrice = (state) => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map((id) => getPhoneById(state, id)),
    )(state.basket);

    return totalPrice;
};

export const getCategories = (state) => R.values(state.categories);

export const getBasketPhonesWithCount = (state) => {
    const phoneCount = (id) => R.compose(
        R.length,
        R.filter((basketId) => R.equals(id, basketId)),
    )(state.basket);
    const phoneWithCount = (phone) => R.assoc('count', phoneCount(phone.id), phone);
    const uniqueIds = R.uniq(state.basket);
    const phones = R.compose(
        R.map(phoneWithCount),
        R.map((id) => getPhoneById(state, id)),
    )(uniqueIds);

    return phones;
};