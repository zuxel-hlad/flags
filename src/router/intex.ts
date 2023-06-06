import { Home, NotFound, Details } from '../pages';

const router = [
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

export default router;
