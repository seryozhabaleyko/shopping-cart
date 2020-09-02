import Catalog from './containers/CatalogContainer';
import { Redirect } from 'react-router-dom';

export const routes = [
    {
        path: '/',
        component: <Redirect to="catalog" />,
    },
    {
        path: '/catalog',
        component: Catalog,
    },
];
