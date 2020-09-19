import { db } from '../services/firebase';

export async function fetchProductsApi() {
    const totalQuery = await db.collection('catalog').get();
    const total = totalQuery.docs.length;

    const catalogCollectionRef = db.collection('catalog').orderBy('createdAt', 'desc').limit(8);

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
