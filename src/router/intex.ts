import { Home, NotFound, Details } from '../pages';

export const router = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/country/:name',
        element: Details,
    },
    {
        path: '*',
        element: NotFound,
    },
];
