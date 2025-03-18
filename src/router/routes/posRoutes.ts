import { routeConstants } from '../routeConstants';

export const posRoutes = [
    {
        path: routeConstants.POS,
        name: 'POS',
        component: () => import('../../views/pos.vue'),
        meta: {
            title: 'POS',
            requiresAuth: true
        },
    },
]