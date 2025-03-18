import { routeConstants } from '../routeConstants';

export const paymentOutRoutes = [
    {
            path: routeConstants.PAYMENT_OUT,
            name: 'Payment Out',
            component: () => import('../../views/Purchase/PaymentOut.vue'),
            meta: {
                title: 'Payment Out',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.CREATE_PAYMENT_OUT(null),
            name: 'Create Payment Out',
            component: () => import('../../components/PaymentOut/CreatePaymentOut.vue'),
            meta: {
                title: 'Create Payment Out',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.PAYMENT_OUT__DETAILS(null),
            name: 'Payment Out Details',
            component: () => import('../../views/Purchase/PaymentOut.vue'),
            meta: {
                title: 'Payment Out Details',
                requiresAuth: true
            },
        },
]