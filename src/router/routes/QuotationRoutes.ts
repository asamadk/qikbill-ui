import { routeConstants } from '../routeConstants';

export const quotationRoutes = [
    {
            path: routeConstants.QUOTATION_ESTIMATE,
            name: 'Quotation Invoice',
            component: () => import('../../views/Sales/Quotation.vue'),
            meta: {
                title: 'Quotation Invoice',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.CREATE_QUOTATION_INVOICE(null),
            name: 'Create Quotation Invoice',
            component: () => import('../../components/Quotations/CreateQuotation.vue'),
            meta: {
                title: 'Create Quotation Invoice',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.QUOTATION_INVOICE_DETAILS(null),
            name: 'Quotation Invoice Details',
            component: () => import('../../components/Quotations/QuotationDetails.vue'),
            meta: {
                title: 'Quotation Invoice Details',
                requiresAuth: true
            },
        },
]