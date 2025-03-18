import { routeConstants } from '../routeConstants';

export const purchaseRoutes = [
    {
        path: routeConstants.PURCHASE_INVOICE,
        name: 'Purchase Invoice',
        component: () => import('../../views/Purchase/PurchaseInvoice.vue'),
        meta: {
            title: 'Purchase Invoice',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.CREATE_PURCHASE_INVOICE(null),
        name: 'Create Purchase Invoice',
        component: () => import('../../components/Purchase/CreatePurchaseInvoice.vue'),
        meta: {
            title: 'Create Purchase Invoice',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.PURCHASE_INVOICE_DETAILS(null),
        name: 'Purchase Invoice Details',
        component: () => import('../../components/Purchase/PurchaseInvoiceDetails.vue'),
        meta: {
            title: 'Purchase Invoice Details',
            requiresAuth: true
        },
    },
]