import { routeConstants } from '../routeConstants';

export const paymentInRoutes = [
    {
            path: routeConstants.PAYMENT_IN,
            name: 'Payment In',
            component: () => import('../../views/Sales/Payment.vue'),
            meta: {
                title: 'Payment In',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.CREATE_PAYMENT_IN(null),
            name: 'Create Payment In',
            component: () => import('../../components/PaymentIn/CreatePaymentIn.vue'),
            meta: {
                title: 'Create Payment In',
                requiresAuth: true
            },
        },
        {
            path: routeConstants.PAYMENT_IN__DETAILS(null),
            name: 'Payment In Details',
            component: () => import('../../views/Sales/Payment.vue'),
            meta: {
                title: 'Payment In Details',
                requiresAuth: true
            },
        },
]