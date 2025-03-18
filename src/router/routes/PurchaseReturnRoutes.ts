import { routeConstants } from '../routeConstants';

export const purchaseReturnRoutes = [
    {
            path: routeConstants.PURCHASE_RETURN,
            name: 'Purchase Return',
            component: () => import('../../views/Purchase/PurchaseReturn.vue'),
            meta: {
                title: 'Purchase Return',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.CREATE_PURCHASE_RETURN(null),
            name: 'Create Purchase Return',
            component: () => import('../../components/PurchaseReturn/CreatePurchaseReturn.vue'),
            meta: {
                title: 'Create Purchase Return',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.PURCHASE_RETURN_DETAILS(null),
            name: 'Purchase Return Details',
            component: () => import('../../components/PurchaseReturn/PurchaseReturnDetail.vue'),
            meta: {
                title: 'Purchase Return Details',
                requiresAuth: true
            },
        },
]