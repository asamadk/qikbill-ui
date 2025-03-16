import { routeConstants } from '../routeConstants';

export const salesReturnRoutes = [
    {
            path: routeConstants.SALES_RETURN,
            name: 'Sales Return',
            component: () => import('../../views/Sales/SalesReturn.vue'),
            meta: {
                title: 'Sales Return',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.CREATE_SALES_RETURN(null),
            name: 'Create Sales Return',
            component: () => import('../../components/SalesReturn/CreateSaleReturn.vue'),
            meta: {
                title: 'Create Sales Return',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.SALES_RETURN_DETAILS(null),
            name: 'Sales Return Details',
            component: () => import('../../components/SalesReturn/SaleReturnDetail.vue'),
            meta: {
                title: 'Sales Return Details',
                requiresAuth: true
            },
        },
]