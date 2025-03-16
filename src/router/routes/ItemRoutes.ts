import { routeConstants } from '../routeConstants';

export const itemRoutes = [
    {
        path: routeConstants.ITEMS,
        name: 'Items',
        component: () => import('../../views/Items.vue'),
        meta: {
            title: 'Items',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.CREATE_ITEMS(null),
        name: 'Create Items',
        component: () => import('../../components/Items/CreateItem.vue'),
        meta: {
            title: 'Create Items',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.EDIT_ITEMS(null),
        name: 'Edit Items',
        component: () => import('../../views/Items.vue'),
        meta: {
          title: 'Edit Items',
          requiresAuth: true
        },
      },
]