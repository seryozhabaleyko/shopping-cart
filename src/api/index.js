import * as R from 'ramda';

import catalog from './mockCatalog';
import categories from './mockCategories';

export const fetchCatalog = async () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(catalog), 1000);
    });

export const fetchProductByIdApi = async (id) =>
    new Promise((resolve, reject) => {
        const product = R.find(R.propEq('id', id), catalog);
        resolve(product);
    });

export const loadMorePhones = async ({ offset }) =>
    new Promise((resolve, reject) => {
        resolve(catalog);
    });

export const fetchPhoneById = async (id) =>
    new Promise((resolve, reject) => {
        const phone = R.find(R.propEq('id', id), catalog);
        resolve(phone);
    });

export const fetchCategories = async () =>
    new Promise((resolve, reject) => {
        resolve(categories);
    });
