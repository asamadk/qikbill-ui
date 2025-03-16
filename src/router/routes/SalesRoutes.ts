import { routeConstants } from '../routeConstants';

export const salesRoutes = [
    {
        path: routeConstants.SALES_INVOICE,
        name: 'Sales Invoice',
        component: () => import('../../views/Sales/SalesInvoices.vue'),
        meta: {
            title: 'Sales Invoice',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.CREATE_SALES_INVOICE(null),
        name: 'Create Sales Invoice',
        component: () => import('../../components/Sales/CreateSalesInvoice.vue'),
        meta: {
            title: 'Create Sales Invoice',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.SALES_INVOICE_DETAILS(null),
        name: 'Sales Invoice Details',
        component: () => import('../../components/Sales/SalesInvoiceDetails.vue'),
        meta: {
            title: 'Sales Invoice Details',
            requiresAuth: true
        },
    },
]