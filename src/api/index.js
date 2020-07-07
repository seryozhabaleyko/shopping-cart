import * as R from 'ramda';

import phones from './mockPhones';
import categories from './mockCategories'

export const fetchPhones = async () => new Promise((resolve, reject) => {
    resolve(phones);
});

export const loadMorePhones = async ({ offset }) => new Promise((resolve, reject) => {
    resolve(phones);
});

export const fetchPhoneById = async (id) => new Promise((resolve, reject) => {
    const phone = R.find(R.propEq('id', id), phones);
    resolve(phone);
});

export const fetchCategories = async () => new Promise((resolve, reject) => {
    resolve(categories);
});