import { db } from '../services/firebase';
import * as R from 'ramda';

import catalog from './mockCatalog';
import categories from './mockCategories';

export const fetchCatalog = async () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(catalog), 1000);
    });

/* export const fetchProductByIdApi = async (id) =>
    new Promise((resolve, reject) => {
        const product = R.find(R.propEq('id', id), catalog);
        resolve(product);
    }); */

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

export async function fetchCatalogApi({ limit = 8 }) {
    const totalQuery = await db.collection('catalog').get();
    const total = totalQuery.docs.length;

    const catalogCollectionRef = db.collection('catalog').orderBy('createdAt', 'desc').limit(limit);

    return catalogCollectionRef.get().then((snapshot) => {
        const lastVisible = snapshot.docs[snapshot.docs.length - 1];
        const products = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        return { products, lastVisible, total };
    });
}

export function loadMoreProductsApi(lastVisible) {
    const productsRef = db.collection('catalog').orderBy('createdAt', 'desc').startAfter(lastVisible).limit(25);

    return productsRef.get().then((snapshot) => {
        const lastVisible = snapshot.docs[snapshot.docs.length - 1];
        const products = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        return { products, lastVisible };
    });
}

export function fetchProductByIdApi(productId) {
    const productRef = db.collection('catalog').doc(productId);

    return productRef.get().then((doc) => ({ ...doc.data(), id: doc.id }));
}
